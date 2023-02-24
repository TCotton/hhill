import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { createZodFetcher } from '../../helpers/zod-fetcher'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const fetchWithZod = createZodFetcher()

    const apiResult = z.object({
      status: z.string({ invalid_type_error: 'Status must be a string' }),
      totalResults: z.number({
        invalid_type_error: 'totalResults must be a number'
      }),
      articles: z.array(
        z.object(
          {
            title: z.string({
              invalid_type_error: 'articles[0].title must be a string'
            }),
            author: z.string({
              invalid_type_error: 'articles[0].author must be a string'
            }),
            url: z.string({
              invalid_type_error: 'articles[0].url must be a string'
            }),
            publishedAt: z.string({
              invalid_type_error: 'articles[0].publishedAt must be a string'
            }),
            source: z.object({
              Id: z.string({
                invalid_type_error: 'articles[0].source.id must be a string'
              }),
              Name: z.string({
                invalid_type_error: 'articles[0].source.name must be a string'
              })
            })
          },
          { invalid_type_error: 'articles must be an array' }
        )
      )
    })

    fetchWithZod(
      // The schema you want to validate with
      apiResult,
      // Any parameters you would usually pass to fetch
      `https://newsapi.org/v2/everything?q=ukraine&pageSize=5&apiKey=${process.env.NEXT_PUBLIC_NEWAPI_KEY}`
    ).then((result) => {
      res.status(200).json({
        message: 'ok',
        result
      })
    })
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(500).json({
        message: err.message
      })
    }
    if (err instanceof Error) {
      res.status(500).json({
        message:
          err.name + err.message + (err.stack ? err.stack.toString() : '')
      })
    }
  }
}
