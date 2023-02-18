// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { getArticles } from '../helpers/fetch'

const SitemapIndex = () => null

const Sitemap = ({ pages, origin }) => {
  /*
   * NOTE: <?xml ?> is optional preamble from the spec,
   *  UTF-8 is the default
   *  version 1.0 is the default
   */
  const xmlns = `http://www.sitemaps.org/schemas/sitemap/0.9`

  return (
    <>
      <urlset xmlns={xmlns}>
        {pages?.map((page, index) => {
          return (
            <url key={index}>
              <loc>{[origin, page?.fullSlug].join('/')}</loc>
              <lastmod>{new Date().toISOString()}</lastmod>
            </url>
          )
        })}
      </urlset>
    </>
  )
}

export const getServerSideProps = async ({ res }) => {
  const { articles } = (await getArticles()) as {
    articles: Record<string, unknown>[]
  }
  const origin = 'https://www.haroldhill.org'

  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<Sitemap pages={articles} origin={origin} />))
  res.end()

  return {
    props: {}
  }
}

export default SitemapIndex
