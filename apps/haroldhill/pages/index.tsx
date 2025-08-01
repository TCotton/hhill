import React, { ReactNode, useEffect, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Header from '../components/Header'
import styles from '../components/layout.module.css'
import mappedArticlesFn from '../helpers/mappedArticlesFn'
import fetch from 'isomorphic-unfetch'
import classNames from 'classnames'
import { getApiRoot } from 'nextjs-url'
import Icon from '../components/Icon'

const fetchData = async (apiRoot) => {
  const content = await fetch(`${apiRoot}/allArticles`)
  return await content.json()
}

function useResults() {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    const apiRoot = getApiRoot().href
    fetchData(apiRoot).then((articles) => {
      if (articles.message === 'ok' && !ignore)
        setResults(mappedArticlesFn(articles.result))
    })
    return () => {
      ignore = true
    }
  }, [])
  return results
}

interface IForwardRefProps {
  children?: ReactNode
  className?: string
  title?: string
  href?: string
  childList?: []
}

type Ref = HTMLAnchorElement

const ListItem = React.forwardRef<Ref, IForwardRefProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li
      className={`govuk-list--number ${styles.indexListItem}`}
      data-testid="list-item">
      <a className={classNames('', className)} {...props} ref={forwardedRef}>
        {title}
      </a>
    </li>
  )
)

ListItem.displayName = 'ListItem'

const ChildList = (props) => {
  const article = props.article
  return (
    <ul className={`govuk-list govuk-list--spaced ${styles.indexUl}`}>
      {Array.isArray(article.pages) &&
        article.pages.map((page) => {
          const href = `${page.slug}-${page.id}`
          return (
            <ListItem
              key={href}
              title={page.title}
              href={href}
              className="govuk-link"
            />
          )
        })}
    </ul>
  )
}

const Index: NextPageWithLayout = () => {
  const articles = useResults()
  return (
    <>
      <Header />
      <div className={`govuk-width-container ${styles.container}`} id="content">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-l">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Harold Hill: A People's History
              </h1>
              <div>
                <Icon />
                <p className="govuk-body">
                  This history project was written at the turn of the
                  millennium. Mostly constructed from interviews and the archive
                  of the Romford Recorder and Romford Times, it aims to tell a
                  story of the Harold Hill housing estate in outer east London
                  from the 1940s to the 1980s. This covers the period from its
                  construction as an LCC “out-county” housing development up
                  until the Right to Buy.
                </p>
                <p className="govuk-body">
                  Other sources include the local history archive at Romford
                  library and the Pelling Collection at the University of
                  London.
                </p>
                <p className="govuk-body">
                  Many of the people interviewed for this project have now
                  passed away, and the historical characters mentioned are two
                  or three generations removed from the current residents. Some
                  are still remembered, but others are mostly forgotten.
                </p>
                <p className="govuk-body">
                  The two decades following the late 1990s were, for various
                  reasons, a challenging period in Harold Hill’s history. But
                  the estate is evolving. Today, Harold Hill is a diverse and
                  mixed community, home to people of different backgrounds,
                  languages, and cultures - a change I welcome. The nearby
                  Harold Wood into Wood into Wood into central London, is
                  London, is set to bring even more transformation to the area.
                </p>
                <p className="govuk-body">
                  Written 20 years ago, this project was a joy to create - and I
                  believe that passion comes through in the writing. It's a
                  celebration of working-class life and culture. At around
                  50,000 words, it’s a substantial read, so I’ve broken it down
                  into manageable sections. The site is designed to be explored
                  either linearly or non-linearly: you can read it from start to
                  finish, or dip in and out of different sections as you like.
                </p>
                <p className="govuk-body">Andrew Walpole, March 2023</p>
              </div>
            </div>
          </div>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-heading-m">Content</h2>
              <ul className="govuk-list govuk-list--spaced">
                {Array.isArray(articles) &&
                  // @ts-ignore
                  articles.map((articles) => (
                    <span key={articles.id + articles.title}>
                      <h3 className="govuk-heading-s">{articles.title}</h3>
                      <ChildList article={articles} />
                    </span>
                  ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Index
