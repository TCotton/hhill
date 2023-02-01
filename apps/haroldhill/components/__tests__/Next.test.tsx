import Next from '../Next'
import { render } from '@testing-library/react'
describe('Next', () => {
  const props = {
    articleId: '12345'
  }

  it('should render successfully', () => {
    const { baseElement } = render(<Next {...props} />)
    expect(baseElement).toBeTruthy()
  })
})
