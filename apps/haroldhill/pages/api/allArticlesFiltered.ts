import { NextApiRequest, NextApiResponse } from 'next'
import mappedArticlesFn from '../../helpers/mappedArticlesFn'
import client from '../../helpers/contentful'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((data) => {
      const dataMapped = mappedArticlesFn(data)
      res.status(200).json({
        message: 'ok',
        result: {
          articles: dataMapped.flatMap((article) => article.pages),
          mappedArticles: dataMapped
        }
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
