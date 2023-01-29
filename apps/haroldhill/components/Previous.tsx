import React, { MouseEvent } from 'react'
import Link from 'next/link'

const Previous = () => {
  interface IMyLinkRefProps {
    onClick?: MouseEvent<HTMLAnchorElement>
    href?: string
  }

  type Ref = HTMLAnchorElement

  const PreviousLink = React.forwardRef<Ref, IMyLinkRefProps>(
    ({ onClick, href }, ref) => {
      return (
        <a href={href} ref={ref} className={`govuk-back-link`}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Previous
        </a>
      )
    }
  )
  PreviousLink.displayName = 'PreviousLink'

  return (
    <Link
      href="/"
      passHref
      // @ts-ignore
      legacyBehavior>
      <PreviousLink />
    </Link>
  )
}

export default Previous
