import React from 'react'
import MenuItems from './MenuItems'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds-from-desktop">
            <p className={`govuk-heading-m ${styles.siteHeader}`}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <em>HAROLD HILL</em>: A People's History
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
