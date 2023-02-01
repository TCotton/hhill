import { render, screen, waitFor } from '@testing-library/react'
import Header from '../Header'

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
                  title: 'HAROLD HILL: A People’s History',
                  slug: '/',
                  pages: [
                    {
                      fields: {
                        title: 'Introduction',
                        contentRichText: 'string',
                        slug: 'introduction',
                        parent: 'HAROLD HILL: A People’s History',
                        id: 'string'
                      },
                      sys: {
                        id: 'StringID'
                      }
                    }
                  ]
                },
                sys: {
                  id: 'string'
                }
              }
            ]
          }
        })
    })
  )
)

describe('Header component', () => {
  it('renders correct href in HTML', () => {
    const { container } = render(<Header />)
    const link = container.querySelector('a')
    waitFor(() => {
      expect(link.getAttribute('href')).toBe('/')
    })
  })
  xit('should match snapshot', () => {
    const { baseElement } = render(<Header />)
    expect(baseElement).toMatchSnapshot()
  })
  it('should render the correct text', () => {
    render(<Header />)
    waitFor(() => {
      expect(screen.getByText(/HAROLD HILL/)).toBeInTheDocument()
      expect(screen.getByText(/A People's History/)).toBeInTheDocument()
      expect(screen.getByTestId('header-link')).toHaveAttribute('href', '/')
      expect(screen.getByTestId('header-link')).toHaveTextContent(
        "HAROLD HILL: A People's History"
      )
    })
  })
})
