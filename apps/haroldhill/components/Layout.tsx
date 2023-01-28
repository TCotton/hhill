import Head from 'next/head'
import React from 'react'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Whatever</title>
      </Head>
      <div className={`govuk-width-container ${styles.container}`}>
        {children}
      </div>
    </>
  )
}
