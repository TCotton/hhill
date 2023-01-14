import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'isomorphic-unfetch'

function ArticleId(props) {
  debugger
  return (
    <ul>
      {props.title} {props.contentRichText}
    </ul>
  )
}

const getArticles = async () => {
  const content = await fetch('http://localhost:3000/api/allArticles')
  const articles = await content.json()
  debugger
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
            fullSlug: `${article.fields.slug}/${page.fields.slug}`
          }
        })
      }
    })
    .flatMap((article) => article.pages)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { title, contentRichText } = params
  debugger
  return {
    props: {
      title: JSON.stringify(params) || 'no title',
      contentRichText: contentRichText || 'no content'
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles()
  debugger
  return {
    paths: articles.map((article) => {
      return {
        params: {
          articleId: article.slug
        }
      }
    }),
    fallback: false
  }
}

export default ArticleId
