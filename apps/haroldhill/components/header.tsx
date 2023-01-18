import React from 'react'
import fetch from 'isomorphic-unfetch'

const getArticles = async () => {
  const content = await fetch('http://localhost:3000/api/allArticles')
  const articles = await content.json()
  return articles.result.items
    .map((article) => {
    return {
      title: article.fields.title,
      slug: article.fields.slug,
      pages: article.fields.pages.map((page) => {
        return {
          title: page.fields.title,
          contentRichText: page.fields.contentRichText,
          slug: page.fields.slug,
          parent: article.fields.title,
          id: page.sys.id
        }
      })
    }
  })
}

const Header = () => {
  const result = getArticles()
  result.then((r) => console.log(r))
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

        </nav>
      </div>
    </header>
  )
}

export default Header
