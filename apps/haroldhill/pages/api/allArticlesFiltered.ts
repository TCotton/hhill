import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'
import { IArticle } from '@hhill/types'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID || '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || ''
})
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((data: IArticle) => {
      const mappedArticles = data.items.map((article) => {
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
      res.status(200).json({
        message: 'ok',
        result: {
          articles: mappedArticles.flatMap((article) => article.pages),
          mappedArticles
        }
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
