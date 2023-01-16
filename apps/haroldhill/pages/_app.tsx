import React from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ContentfulProvider } from 'react-contentful'
import { contentfulClient, previewContentfulClient } from '@hhill/contenful'
import '../styles/reset.scss'
import '../styles/gds.scss'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ui-article!</title>
      </Head>
      <ContentfulProvider
        client={
          router.query.preview === '1'
            ? previewContentfulClient
            : contentfulClient
        }>
        <Component {...pageProps} />
      </ContentfulProvider>
    </>
  )
}

export default CustomApp
