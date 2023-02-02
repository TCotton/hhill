import * as React from 'react'
import { FC } from 'react'
import { featureToggle, toggleOn } from './environment-variables'
import { render, screen, cleanup } from '@testing-library/react'

interface NavProps {
  greetings: string
}

describe('feature toggle', () => {
  const Nav: FC<NavProps> = ({ greetings = 'Hello' }) => {
    return (
      <div data-testid="element">
        {greetings}
        {featureToggle.unitTesting() && (
          <span data-testid="test">unit testing</span>
        )}
        {featureToggle.unitTestingTwo() && (
          <span data-testid="testtwo">unit testing</span>
        )}
      </div>
    )
  }

  afterEach(cleanup)

  describe('featureToggle - undefined && true for test env variable', () => {
    it(`should return undefined || 'true' || 'false'`, () => {
      expect(process.env.NEXT_PUBLIC_RELEASE_UNIT_TESTING).toBe(undefined)
      expect(process.env.NEXT_PUBLIC_RELEASE_UNIT_TESTING_TWO).toBe('false')
    })
    it('should return false if unitTesting called', () => {
      expect(featureToggle.unitTesting()).toBe(false)
    })
    it('should false false if unitTestingTwo is called', () => {
      expect(featureToggle.unitTestingTwo()).toBe(false)
    })
    xit('should render with correct elements', () => {
      const { baseElement } = render(<Nav greetings="" />)
      expect(baseElement).toMatchSnapshot()
      expect(screen.queryByTestId('payment')).toBeInTheDocument()
      expect(screen.queryByTestId('subscription')).toBeInTheDocument()
      expect(screen.queryByTestId('test')).not.toBeInTheDocument()
      expect(screen.queryByTestId('testtwo')).not.toBeInTheDocument()
      expect(screen.queryByTestId('reviews')).toBeInTheDocument()
      expect(screen.queryByTestId('productRecommendations')).toBeInTheDocument()
    })
    it(`should NOT render component if feature toggle is undefined`, () => {
      const Component = toggleOn('unitTesting', Nav)
      const { container, baseElement } = render(<Component />)
      expect(baseElement).toMatchSnapshot()
      expect(container.firstChild).toBe(null)
    })
    it(`should NOT render component if feature toggle is 'false'`, () => {
      const Component = toggleOn('unitTestingTwo', Nav)
      const { container, baseElement } = render(<Component />)
      expect(baseElement).toMatchSnapshot()
      expect(container.firstChild).toBe(null)
    })
  })
})
