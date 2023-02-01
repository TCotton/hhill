import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'
import navigationArticlesFilter from '../../helpers/navigationArticlesFilter'
import { IArticle } from '@hhill/types'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID || '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || ''
})

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const direction = req.query.direction as 'next' | 'previous'
  const articleId = req.query.articleId as string

  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((result) => {
      console.dir(result)
      res.status(200).json({
        message: 'ok',
        result: navigationArticlesFilter(
          result as unknown as IArticle,
          direction,
          articleId
        )
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
