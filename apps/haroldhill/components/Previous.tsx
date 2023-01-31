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
    const content = await fetch(
      'http://localhost:3000/api/navigationArticles?articleId=' +
        articleId +
        '&direction=previous'
    )
    return await content.json()
  }
  fetchData().then((nextArticle) => {
    if (nextArticle.message === 'ok') setPrevious(nextArticle?.result?.fullSlug)
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

export default React.memo(Previous)
