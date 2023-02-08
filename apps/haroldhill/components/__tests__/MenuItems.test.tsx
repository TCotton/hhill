import React from 'react'
import { render, waitFor } from '@testing-library/react'
import MenuItems from '../MenuItems'
import fetch from 'isomorphic-unfetch'

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
                  title: 'title',
                  slug: 'slug',
                  pages: [
                    {
                      sys: {
                        id: '1'
                      },
                      fields: {
                        title: 'page 1',
                        slug: 'page-1',
                        contentRichText: 'contentRichText'
                      }
                    },
                    {
                      sys: {
                        id: 'H1Omej68TZxpk9JFIhmWQ'
                      },
                      fields: {
                        title: 'page 2',
                        slug: 'page-2',
                        contentRichText: 'contentRichText'
                      }
                    },
                    {
                      sys: {
                        id: '3'
                      },
                      fields: {
                        title: 'page 3',
                        slug: 'page-3',
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

describe('MenuItems component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('renders the Navigation component with articles data', async () => {
    const { findByText } = render(<MenuItems />)
    expect(await findByText(/Menu/i)).toBeInTheDocument()
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(`http://localhost/api/allArticles`)
    })
  })
  xit('should match snapshot', async () => {
    const { container } = render(<MenuItems />)
    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })
})
