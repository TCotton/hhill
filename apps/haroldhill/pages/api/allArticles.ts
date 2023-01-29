import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
})

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
