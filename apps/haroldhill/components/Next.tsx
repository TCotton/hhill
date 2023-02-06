import React, { MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { getApiRoot } from 'nextjs-url'
const fetchData = async (articleId, apiRoot) => {
  const content = await fetch(
    `${apiRoot}/navigationArticles?articleId=` + articleId + '&direction=next'
  )
  return await content.json()
}
function useResults(articleId) {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    const apiRoot = getApiRoot().href
    fetchData(articleId, apiRoot).then((nextArticle) => {
      if (nextArticle.message === 'ok' && !ignore)
        setResults(nextArticle?.result?.fullSlug)
    })
    return () => {
      ignore = true
    }
  }, [articleId])
  return results
}

const Previous = (props) => {
  const { articleId } = props
  const next = useResults(articleId)
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

export default React.memo(Previous)
