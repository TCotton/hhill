import React from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import '../styles/reset.scss'
import '../styles/gds.scss'
import '../styles/radixui.scss'
import '../styles/gemc_navigation.scss'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Harold Hill: A People's History</title>
        <NextSeo
          title="Harold Hill: A People's History"
          description="A prototype for a new website for Harold Hill."
          openGraph={{
            title: `Harold Hill: A People's History`
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
