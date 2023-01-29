import React, { MouseEvent } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Previous = (props) => {
  const { articleId } = props
  const [previous, setPrevious] = React.useState(null)
  interface IMyLinkRefProps {
    onClick?: MouseEvent<HTMLAnchorElement>
    href?: string
  }

  type Ref = HTMLAnchorElement

  const PreviousLink = React.forwardRef<Ref, IMyLinkRefProps>(
    ({ onClick, href }, ref) => {
      return (
        <p>
          <a href={href} ref={ref} className={`govuk-back-link`}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Previous
          </a>
        </p>
      )
    }
  )
  PreviousLink.displayName = 'PreviousLink'

  const fetchData = async () => {
    const content = await fetch('http://localhost:3000/api/allArticles')
    const articles = await content.json()

    const article = articles.result.items.map((article) => {
      return {
        title: article.fields.title,
        slug: article.fields.slug,
        pages: article.fields.pages.map((page) => {
          return {
            title: page.fields.title,
            contentRichText: page.fields.contentRichText,
            slug: page.fields.slug,
            fullSlug: `${page.fields.slug}-${page.sys.id}`,
            id: page.sys.id
          }
        })
      }
    })
    const orderedArticles = article
      .flatMap((article) => article.pages)
      .map((page, index) => Object.assign(page, { newId: index }))

    const currentArticle = orderedArticles.find(
      (article) => article.id === articleId
    )

    return orderedArticles.find(
      (article) => article.newId === currentArticle.newId - 1
    )
  }
  fetchData().then((previousArticle) => {
    setPrevious(previousArticle.fullSlug)
  })

  return (
    <>
      {previous && (
        <Link
          href={previous}
          passHref
          // @ts-ignore
          legacyBehavior>
          <PreviousLink />
        </Link>
      )}
    </>
  )
}

export default Previous
