import Index from '../pages'
import { render, waitFor } from '@testing-library/react'
jest.mock('isomorphic-unfetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          message: 'ok',
          result: {
            items: [
              {
                fields: {
                  title: 'Beginnings and Foundations ',
                  slug: 'beginnings-foundations',
                  pages: [
                    {
                      fields: {
                        title: 'The Beginning',
                        slug: 'the-beginning',
                        contentRichText: 'contentRichText'
                      }
                    },
                    {
                      fields: {
                        title: 'The Foundation',
                        slug: 'the-foundation',
                        contentRichText: 'contentRichText'
                      }
                    }
                  ]
                }
              }
            ]
          }
        })
    })
  )
)
describe('Index', () => {
  it('should not render undefined', async () => {
    const { baseElement } = render(<Index />)
    await waitFor(() => {
      expect(baseElement).toBeDefined()
    })
  })
  it('should render with the correct text', async () => {
    const { findByText } = render(<Index />)
    expect(await findByText('Beginnings and Foundations')).toBeTruthy()
    expect(await findByText('The Beginning')).toBeTruthy()
    expect(await findByText('The Foundation')).toBeTruthy()
  })
})
