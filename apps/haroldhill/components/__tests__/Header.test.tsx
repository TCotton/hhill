import { render, waitFor } from '@testing-library/react'
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
  afterEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
  })
  xit('renders correct href in HTML', () => {
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
  it('should render the correct text', async () => {
    const { getByText, getByTestId } = render(<Header />)
    await waitFor(() => {
      expect(getByText(/HAROLD HILL/)).toBeInTheDocument()
      expect(getByText(/A People's History/)).toBeInTheDocument()
      expect(getByTestId('header-link')).toHaveAttribute('href', '/')
      expect(getByTestId('header-link')).toHaveTextContent(
        "HAROLD HILL: A People's History"
      )
    })
  })
})
