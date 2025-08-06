import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../helpers/contentful'
let cachedData: any = null
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (cachedData) {
    return res.status(200).json(cachedData)
  }
  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((result) => {
      cachedData = {
        message: 'ok',
        result
      }
      res.status(200).json(cachedData)
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
