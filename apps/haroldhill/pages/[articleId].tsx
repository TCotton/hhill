import { GetStaticPaths, GetStaticPropsContext } from 'next'
import fetch from 'isomorphic-unfetch'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import addClasses from 'rehype-add-classes'
import rehypeRaw from 'rehype-raw'
import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import styles from './article.module.css'
import Previous from '../components/Previous'
import Next from '../components/Next'
import Caption from '../components/Caption'

const BackToTop = () => {
  return (
    <div className="app-back-to-top back-to-top" data-module="app-back-to-top">
      <a
        className={`govuk-link govuk-link--no-visited-state app-back-to-top__link ${styles.backToTop}`}
        href="#top">
        <svg
          role="presentation"
          focusable="false"
          className={`app-back-to-top__icon ${styles.backToTop__icon}`}
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="17"
          viewBox="0 0 13 17">
          <path
            fill="currentColor"
            d="M6.5 0L0 6.5 1.4 8l4-4v12.7h2V4l4.3 4L13 6.4z"></path>
        </svg>
        Back to top
      </a>
    </div>
  )
}

function ArticleId(props) {
  const { title, contentRichText, id } = props
  return (
    <>
      <Header />
      <Layout title={title}>
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <Previous articleId={id} />
              <Caption id={id} />
              <h1 className="govuk-heading-l">{title}</h1>
              {<div dangerouslySetInnerHTML={{ __html: contentRichText }} />}
              <Next articleId={id} />
            </div>
            <div className="govuk-grid-column-one-third">
              <BackToTop />
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

const fetchData = async (url) => {
  const content = await fetch(url)
  return await content.json()
}

const getArticles = async () => {
  const content = await fetch('http://localhost:3000/api/allArticles')
  const articles = await content.json()
  const mappedArticles = articles.result.items.map((article) => {
    return {
      title: article.fields.title,
      slug: article.fields.slug,
      pages: article.fields.pages.map((page) => {
        return {
          title: page.fields.title,
          contentRichText: page.fields.contentRichText,
          slug: page.fields.slug,
          fullSlug: `${article.fields.slug}/${page.fields.slug}`,
          id: page.sys.id
        }
      })
    }
  })
  return {
    articles: mappedArticles.flatMap((article) => article.pages),
    mappedArticles
  }
}

export const getStaticProps: ({
  params
}: GetStaticPropsContext<{ articleId: string }>) => Promise<{
  props: { contentRichText: string; id: null; title: string }
}> = async ({ params }: GetStaticPropsContext<{ articleId: string }>) => {
  // TODO: fix this
  // @ts-ignore
  const { articleId } = params
  const content = await fetch(
    `http://localhost:3000/api/article?id=${articleId}`
  )
  const article = await content.json()
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(addClasses, {
      p: 'govuk-body',
      h1: 'govuk-heading-l',
      h2: 'govuk-heading-m',
      h3: 'govuk-heading-m',
      h4: 'govuk-heading-m',
      h5: 'govuk-heading-m',
      h6: 'govuk-heading-m'
    })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(article.result.fields.contentRichText)
  const contentHtml = processedContent.toString()
  return {
    props: {
      title: article.result.fields.title || 'no title',
      contentRichText: contentHtml || 'no content',
      id: article.result.sys.id || null
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { articles } = await getArticles()
  return {
    paths: articles.map((article) => {
      return {
        params: {
          articleId: `${article.slug}-${article.id}`
        }
      }
    }),
    fallback: false
  }
}

export default ArticleId
