import React, { ReactNode, useEffect, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Header from '../components/Header'
import styles from '../components/layout.module.css'
import mappedArticlesFn from '../helpers/mappedArticlesFn'
import fetch from 'isomorphic-unfetch'
import classNames from 'classnames'

const fetchData = async () => {
  console.log(process.env)
  const content = await fetch(`http://localhost:3000/api/allArticles`)
  return await content.json()
}

function useResults() {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    fetchData().then((articles) => {
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
    <li className={`govuk-list--number ${styles.indexListItem}`}>
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
      {article.pages.map((page) => {
        const href = `${page.slug}-${page.id}`
        return (
          <ListItem
            key={page.id}
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
                Welcome to Harold Hill: A People's History
              </h1>
              <p className="govuk-body">
                This is a prototype for a new website for Harold Hill.
              </p>
              <p className="govuk-body">
                It is built using Next.js, TypeScript, React, and the GOV.UK
                Design System.
              </p>
              <p className="govuk-body">
                It is a work in progress, and is not yet ready for public
                consumption.
              </p>
            </div>
          </div>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-heading-m">Content</h2>
              <ul className="govuk-list govuk-list--spaced">
                {articles &&
                  articles.map((articles) => (
                    <span key={articles.id + articles.title}>
                      <h3 className="govuk-heading-s">
                        {articles.title}
                      </h3>
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
