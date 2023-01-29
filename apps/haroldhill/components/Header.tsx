import React, { MouseEvent } from 'react'
import MenuItems from './MenuItems'
import Link from 'next/link'
import styles from './Header.module.css'
const Header = () => {
  interface IMyLinkRefProps {
    onClick?: MouseEvent<HTMLAnchorElement>
    href?: string
  }

  type Ref = HTMLAnchorElement

  const MyLink = React.forwardRef<Ref, IMyLinkRefProps>(
    ({ onClick, href }, ref) => {
      return (
        <a
          href={href}
          ref={ref}
          className={`govuk-link govuk-link--inverse govuk-link--no-underline ${styles.header}`}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <em>HAROLD HILL</em>: A People's History{' '}
        </a>
      )
    }
  )
  MyLink.displayName = 'MyButton'

  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-grid-row">
          <div
            className={`govuk-grid-column-two-thirds-from-desktop ${styles.center}`}>
            <p className={`govuk-heading-m ${styles.siteHeader}`}>
              <Link
                href="/"
                passHref
                // @ts-ignore
                legacyBehavior>
                <MyLink />
              </Link>
            </p>
          </div>
          <div className="govuk-grid-column-one-third-from-desktop">
            <nav aria-label="Menu" className="govuk-header__navigation">
              <MenuItems />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
