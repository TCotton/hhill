import Head from 'next/head'
import React from 'react'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}
const mainTitle = `Harold Hill: A People's History`;
export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title} - {mainTitle}
        </title>
      </Head>
      <div className={`govuk-width-container ${styles.container}`} id="content">
        {children}
      </div>
    </>
  )
}
