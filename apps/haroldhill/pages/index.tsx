import React, { ReactNode, useEffect, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Header from '../components/Header'
import styles from '../components/layout.module.css'
import mappedArticlesFn from '../helpers/mappedArticlesFn'
import fetch from 'isomorphic-unfetch'
import classNames from 'classnames'
import { getApiRoot } from 'nextjs-url'
import Icon from '../components/Icon'
import { IPagesFields } from "@hhill/types";

const fetchData = async (apiRoot: string) => {
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

const ChildList = (props: { article: { pages: IPagesFields } }) => {
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
                  an LCC “out-county” housing development up until the Right to
                  Buy.
                </p>
                <p className="govuk-body">
                  Other sources include the local history archive at Romford
                  library and the Pelling Collection at the University of London.
                </p>
                <p className="govuk-body">
                  Many of the people interviewed for this project have now
                  passed away, and the historical characters mentioned are two
                  or three generations removed from the current residents. Some
                  are still remembered, but others are mostly forgotten.
                </p>
                <p className="govuk-body">
                  The 20 years from the late 1990s onwards were not, for various
                  reasons, a particularly good period in Harold Hill’s history.
                  But the estate is changing. Harold Hill is now a mixed
                  community with different languages and races. I welcome this
                  change. The opening of Crossrail, which runs to nearby Harold
                  Wood directly into central London, will bring further
                  transformation.
                </p>
                <p className="govuk-body">
                  Written 20 years ago, I enjoyed working on this project and I
                  think that shows in the text. It’s a celebration of working
                  class life and living. At 50k words, it’s a large read, so
                  I’ve broken it down into readable chunks. The site is designed
                  to be read linear or non-linearly. You can read the whole
                  thing from start to finish, or you can dip in and out of the
                  various sections.
                </p>
                <p className="govuk-body">Andrew Walpole</p>
              </div>
            </div>
          </div>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-heading-m">Content</h2>
              <ul className="govuk-list govuk-list--spaced">
                {Array.isArray(articles) &&
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
