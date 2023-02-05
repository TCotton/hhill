import React from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Script from 'next/script'

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GLP5ES5C8N"
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-GLP5ES5C8N');`
        }}
      />
      <NextSeo
        title="Harold Hill: A People's History"
        description="A social history of the Harold Hill estate in east London"
        openGraph={{
          title: `Harold Hill: A People's History`,
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
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
