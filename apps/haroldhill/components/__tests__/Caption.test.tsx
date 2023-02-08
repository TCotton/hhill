import Caption from '../Caption'
import { render, waitFor } from '@testing-library/react'

jest.mock('isomorphic-unfetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          message: 'ok',
          result: {
            articles: [
              {
                contentRichText: 'string',
                fullSlug: 'victorian-philanthropy-5iY9i7n6KvrbqvMQPhKE0t',
                id: '5iY9i7n6KvrbqvMQPhKE0t',
                slug: 'victorian-philanthropy',
                title: 'Victorian Philanthropy'
              }
            ],
            mappedArticles: [
              {
                title: 'Beginnings and Foundations',
                slug: 'beginnings-and-foundations',
                pages: [
                  {
                    contentRichText: 'string',
                    fullSlug: 'victorian-philanthropy-5iY9i7n6KvrbqvMQPhKE0t',
                    id: '5iY9i7n6KvrbqvMQPhKE0t',
                    slug: 'victorian-philanthropy',
                    title: 'Victorian Philanthropy'
                  }
                ]
              }
            ]
          }
        })
    })
  )
)
describe('Caption', () => {
  it('should render defined', async () => {
    const { baseElement } = await render(
      <Caption id="5iY9i7n6KvrbqvMQPhKE0t" />
    )
    await waitFor(async () => {
      expect(baseElement).toBeDefined()
    })
  })
})
