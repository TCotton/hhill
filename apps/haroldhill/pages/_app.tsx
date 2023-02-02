import React from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ContentfulProvider } from 'react-contentful'
import '../styles/reset.scss'
import '../styles/gds.scss'
import '../styles/radixui.scss'
import '../styles/gemc_navigation.scss'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Harold Hill: A People's History</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
