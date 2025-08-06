import { NextApiRequest, NextApiResponse } from 'next'
import navigationArticlesFilter from '../../helpers/navigationArticlesFilter'
import { IArticle } from '@hhill/types'
import client from '../../helpers/contentful'

let cachedData: any = null

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const direction = req.query.direction as 'next' | 'previous'
  const articleId = req.query.articleId as string

  if (cachedData) {
    return res.status(200).json({
      message: 'ok',
      result: navigationArticlesFilter(
        cachedData as unknown as IArticle,
        direction,
        articleId
      )
    })
  }

  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((result) => {
      cachedData = result
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
