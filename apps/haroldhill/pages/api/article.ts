import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../helpers/contentful'

const articleCache: Record<string, any> = {}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string }
  const cacheKey = id.toString().split('-').pop() || ''

  if (articleCache[cacheKey]) {
    return res.status(200).json(articleCache[cacheKey])
  }

  return client
    .getEntry(id.toString().split('-').pop() || '')
    .then((result) => {
      const response = {
        message: 'ok',
        result
      }
      articleCache[cacheKey] = response
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
