import React from 'react'
import MenuItems from './MenuItems'


const Header = () => {
  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__logo">
          <a
            href="#"
            className="govuk-header__link govuk-header__link--homepage">
            <span className="govuk-header__logotype">
              <span className="govuk-header__logotype-text">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <em>HAROLD HILL</em>: A People's History
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="govuk-header__content">
        <nav aria-label="Menu" className="govuk-header__navigation ">
          <ul className="govuk-header__navigation-list">
            <MenuItems />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
