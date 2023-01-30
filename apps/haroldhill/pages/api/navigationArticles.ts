import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
})

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const direction = (req.query.direction as string) === 'next' ? 1 : -1
  const articleId = req.query.articleId as string

  const filterData = (articles) => {
    const article = articles.items.map((article) => {
      return {
        title: article.fields.title,
        slug: article.fields.slug,
        pages: article.fields.pages.map((page) => {
          return {
            title: page.fields.title,
            contentRichText: page.fields.contentRichText,
            slug: page.fields.slug,
            fullSlug: `${page.fields.slug}-${page.sys.id}`,
            id: page.sys.id
          }
        })
      }
    })
    const orderedArticles = article
      .flatMap((article) => article.pages)
      .map((page, index) => Object.assign(page, { newId: index }))

    const currentArticle = orderedArticles.find(
      (article) => article.id === articleId
    )

    return orderedArticles.find(
      (article) => article.newId === currentArticle.newId + direction
    )
  }

  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((result) => {
      res.status(200).json({
        message: 'ok',
        result: filterData(result)
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
