import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../helpers/contentful'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((result) => {
      res.status(200).json({
        message: 'ok',
        result
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: err.name + err.message + err.stack.toString()
      })
    })
}
