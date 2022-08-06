import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ContentfulProvider } from 'react-contentful'
import { contentfulClient, previewContentfulClient } from '@hhill/contenful'
import getPage from 'api/contentful'
import './styles.css'

function CustomApp({ Component, pageProps, router }: AppProps) {
  const page = await getPage({
    pageContentType: 'page_help_center_article',
    slug: 'introduction-to-contentful',
    locale: 'de-DE',
  });
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
