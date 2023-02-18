import React from 'react'
import styles from './layout.module.css'
import { NextSeo } from 'next-seo'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}
const mainTitle = `Harold Hill: A People's History`

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <NextSeo
        title={`${title} - ${mainTitle}`}
        openGraph={{
          title: `Harold Hill: A People's History`,
          siteName: `Harold Hill: A People's History`,
          type: 'website',
          locale: 'en_GB',
          url: process.env.NEXT_PUBLIC_BASE_URL,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/haroldhill.png`,
              width: 600,
              height: 600,
              alt: `Harold Hill: A People's History`
            }
          ]
        }}
        noindex={true}
      />
      <div className={`govuk-width-container ${styles.container}`} id="content">
        {children}
      </div>
    </>
  )
}
