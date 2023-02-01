import Next from '../Next'
import { render } from '@testing-library/react'
describe('Next', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Next />)
    expect(baseElement).toBeTruthy()
  })
})
