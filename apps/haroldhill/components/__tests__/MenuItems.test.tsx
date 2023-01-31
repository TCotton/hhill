import React from 'react'
import { render, waitFor } from '@testing-library/react'
import fetch from 'isomorphic-unfetch'
import MenuItems from '../MenuItems'

jest.mock('isomorphic-unfetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          result: {
            items: [
              {
                fields: {
                  title: 'Article 1',
                  slug: 'article-1',
                  pages: [
                    {
                      fields: {
                        title: 'Page 1.1',
                        contentRichText: 'Page 1.1 content',
                        slug: 'page-1.1',
                        parent: 'Article 1',
                        id: '12345'
                      },
                      sys: {
                        id: '12345'
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
  it('renders the Navigation component with articles data', async () => {
    const { findByText } = render(<MenuItems />)
    expect(await findByText(/Article 1/i)).toBeInTheDocument()
    expect(await findByText('Page 1.1')).toBeInTheDocument()
    expect(await findByText('Page 1.1 content')).toBeInTheDocument()
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/allArticles')
  })
  it('should match snapshot', async () => {
    const { baseElement } = render(<MenuItems />)
    waitFor(() => {
      expect(baseElement).toMatchSnapshot()
    })
  })
})
