import React, { MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { getApiRoot } from 'nextjs-url'
import fetchWithErrorHandle from '../helpers/fetchWithErrorHandle'
function useResults(articleId) {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    const apiRoot = getApiRoot().href
    fetchWithErrorHandle(
      `${apiRoot}/navigationArticles?articleId=` +
        articleId +
        '&direction=previous'
    ).then((prevArticle) => {
      if (prevArticle.message === 'ok' && !ignore)
        setResults(prevArticle?.result?.fullSlug)
    })
    return () => {
      ignore = true
    }
  }, [articleId])
  return results
}

const Previous = (props) => {
  const { articleId } = props
  const previous = useResults(articleId)
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
            Previous
          </a>
        </p>
      )
    }
  )
  PreviousLink.displayName = 'PreviousLink'

  return (
    <>
      {previous && (
        <Link href={previous} passHref legacyBehavior>
          <PreviousLink />
        </Link>
      )}
    </>
  )
}

export default React.memo(Previous)
