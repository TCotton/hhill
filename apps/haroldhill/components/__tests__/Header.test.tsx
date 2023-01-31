import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header component', () => {
  it('renders correct href in HTML', () => {
    const { container } = render(<Header />)
    const link = container.querySelector('a')
    expect(link.getAttribute('href')).toBe('/')
  })
  it('should match snapshot', () => {
    const { baseElement } = render(<Header />)
    expect(baseElement).toMatchSnapshot()
  })
  it('should render the correct text', () => {
    render(<Header />)
    expect(screen.getByText(/HAROLD HILL/)).toBeInTheDocument()
    expect(screen.getByText(/A People's History/)).toBeInTheDocument()
    expect(screen.getByTestId('header-link')).toHaveAttribute('href', '/')
    expect(screen.getByTestId('header-link')).toHaveTextContent(
      "HAROLD HILL: A People's History"
    )
  })
})
