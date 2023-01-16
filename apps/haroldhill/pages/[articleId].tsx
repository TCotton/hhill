import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'isomorphic-unfetch'
import { remark } from 'remark'
import html from 'remark-html'
import React from 'react'
import Layout from '../components/layout'

function ArticleId(props) {
  const { title, contentRichText } = props
  return (
    <Layout>
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">{title}</h1>
            <p className="govuk-body">
              This is a paragraph inside a two-thirds wide column
            </p>
            <div dangerouslySetInnerHTML={{ __html: contentRichText }} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

const getArticles = async () => {
  const content = await fetch('http://localhost:3000/api/allArticles')
  const articles = await content.json()
  return articles.result.items
    .map((article) => {
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
    .flatMap((article) => article.pages)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { articleId } = params
  const content = await fetch(
    `http://localhost:3000/api/article?id=${articleId}`
  )
  const article = await content.json()
  const processedContent = await remark()
    .use(html)
    .process(article.result.fields.contentRichText)
  const contentHtml = processedContent.toString()
  return {
    props: {
      title: article.result.fields.title || 'no title',
      contentRichText: contentHtml || 'no content'
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles()
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
