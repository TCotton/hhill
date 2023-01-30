import React, { MouseEvent } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Previous = (props) => {
  const { articleId } = props
  const [next, setNext] = React.useState(null)
  interface IMyLinkRefProps {
    onClick?: MouseEvent<HTMLAnchorElement>
    href?: string
  }

  type Ref = HTMLAnchorElement

  const NextLink = React.forwardRef<Ref, IMyLinkRefProps>(
    ({ onClick, href }, ref) => {
      return (
        <p>
          <a href={href} ref={ref} className={`govuk-forward-link`}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Next
          </a>
        </p>
      )
    }
  )
  NextLink.displayName = 'NextLink'

  const fetchData = async () => {
    const content = await fetch(
      'http://localhost:3000/api/navigationArticles?articleId=' +
        articleId +
        '&direction=next'
    )
    return await content.json()
  }
  fetchData().then((nextArticle) => {
    if (nextArticle.message === 'ok') setNext(nextArticle?.result?.fullSlug)
  })

  return (
    <>
      {next && (
        <Link
          href={next}
          passHref
          // @ts-ignore
          legacyBehavior>
          <NextLink />
        </Link>
      )}
    </>
  )
}

export default Previous
