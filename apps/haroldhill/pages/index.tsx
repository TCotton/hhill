import React, { useEffect, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Header from '../components/Header'
import styles from '../components/layout.module.css'
import mappedArticlesFn from '../helpers/mappedArticlesFn'

const fetchData = async () => {
  const content = await fetch('http://localhost:3000/api/allArticles')
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

const Index: NextPageWithLayout = () => {
  const articles = useResults()
  return (
    <>
      <Header />
      <div className={`govuk-width-container ${styles.container}`}>
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
              {articles && (
                <ul className="govuk-list">
                  {articles.map((article) => {
                    const id =
                      `${article.slug}-${article.title}` +
                      Math.random().toString(36).substr(2, 9)
                    return (
                      <li key={id}>
                        <span className="govuk-heading-m">{article.title}</span>
                        <ul className="govuk-list">
                          {article.subArticles.map((subArticle) => {
                            const subId =
                              `${subArticle.slug}-${subArticle.title}` +
                              Math.random().toString(36).substr(2, 9)
                            return (
                              <li key={subId}/>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Index
