import React from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import type { NextWebVitalsMetric } from 'next/app'
import { NextSeo } from 'next-seo'
import '../styles/reset.scss'
import '../styles/gds.scss'
import '../styles/radixui.scss'
import '../styles/gemc_navigation.scss'
import { GoogleAnalytics, event } from 'nextjs-google-analytics'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  event(metric.name, {
    category:
      metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(
      metric.name === 'CLS' ? metric.value * 1000 : metric.value
    ), // values must be integers
    label: metric.id, // id unique to current page load
    nonInteraction: true // avoids affecting bounce rate.
  })
}
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <NextSeo
        title="Harold Hill: A People's History"
        description="A social history of the Harold Hill estate in east London"
        openGraph={{
          title: `Harold Hill: A People's History`,
          type: 'website',
          locale: 'en_GB',
          url: 'https://www.haroldhill.org',
          images: [
            {
              url: `https://www.haroldhill.org/haroldhill.png`,
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
