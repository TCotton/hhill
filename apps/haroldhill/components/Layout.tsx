import Head from 'next/head'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Whatever</title>
      </Head>
      <div className="govuk-width-container">{children}</div>
    </>
  )
}
