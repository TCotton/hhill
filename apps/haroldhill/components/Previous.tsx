import React, {MouseEvent, useEffect, useState} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const fetchData = async (articleId) => {
  const content = await fetch(
    'http://localhost:3000/api/navigationArticles?articleId=' +
    articleId +
    '&direction=previous'
  )
  return await content.json()
}

function useResults(articleId) {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    fetchData(articleId).then((nextArticle) => {
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
            {/* eslint-disable-next-line react/no-unescaped-entities */}
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
          // @ts-ignore
          legacyBehavior>
          <PreviousLink />
        </Link>
      )}
    </>
  )
}

export default React.memo(Previous)
