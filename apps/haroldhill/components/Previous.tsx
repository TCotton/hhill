import React, { MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { getApiRoot } from 'nextjs-url'
const fetchData = async (articleId, apiRoot) => {
  const content = await fetch(
    `${apiRoot}/navigationArticles?articleId=` +
      articleId +
      '&direction=previous'
  )
  return await content.json()
}
function useResults(articleId) {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    const apiRoot = getApiRoot().href
    fetchData(articleId, apiRoot).then((prevArticle) => {
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
        <Link
          href={previous}
          passHref
          legacyBehavior>
          <PreviousLink />
        </Link>
      )}
    </>
  )
}

export default React.memo(Previous)
