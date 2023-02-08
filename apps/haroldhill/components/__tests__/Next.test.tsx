import Next from '../Next'
import { render, waitFor } from '@testing-library/react'

jest.mock('isomorphic-unfetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          message: 'ok',
          result: {
            contentRichText: 'string',
            fullSlug: 'string',
            id: 'string',
            title: 'A Title',
            slug: 'string',
            newId: 'number'
          }
        })
    })
  )
)

describe('Next', () => {
  const props = {
    articleId: '12345'
  }

  it('should render successfully', async () => {
    const { baseElement } = await render(<Next {...props} />)
    await waitFor(async () => {
      expect(baseElement).toBeTruthy()
    })
  })
  it('should render with the correct text', async () => {
    const { findByText } = render(<Next {...props} />)
    expect(await findByText('Next')).toBeTruthy()
  })
  it('should render with correct href', async () => {
    const { findByText } = render(<Next {...props} />)
    expect(await findByText('Next')).toHaveAttribute('href', 'string')
  })
  xit('should match snapshot', async () => {
    const { baseElement } = render(<Next {...props} />)
    await waitFor(() => {
      expect(baseElement).toMatchSnapshot()
    })
  })
})
