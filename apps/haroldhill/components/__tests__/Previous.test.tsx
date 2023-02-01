import Previous from '../Previous'
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
describe('Previous', () => {
  const props = {
    articleId: '12345'
  }
  it('should render successfully', async () => {
    const { baseElement } = render(<Previous {...props} />)
    await waitFor(() => {
      expect(baseElement).toBeTruthy()
    })
  })
  it('should render with the correct text', async () => {
    const { findByText } = render(<Previous {...props} />)
    expect(await findByText('Previous')).toBeTruthy()
  })
  it('should render with correct href', async () => {
    const { findByText } = render(<Previous {...props} />)
    expect(await findByText('Previous')).toHaveAttribute('href', '/string')
  })
})
