import React from 'react'

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
                HAROLD HILL: A People's History
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
