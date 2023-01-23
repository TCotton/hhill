import React from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ContentfulProvider } from 'react-contentful'
import { contentfulClient, previewContentfulClient } from '@hhill/contenful'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';
import '../styles/reset.scss'
import '../styles/gds.scss'
import '../styles/radixui.scss'
import '../styles/gemc_navigation.scss'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

/*
Button,
  Menu,
  MenuButton,
  MenuList,
 */

const theme = extendTheme({
  components: {
    Button: {},
    Menu: {},
    MenuButton: {},
    MenuList: {}
  }
})

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ui-article!</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ContentfulProvider
          client={
            router.query.preview === '1'
              ? previewContentfulClient
              : contentfulClient
          }>
          <Component {...pageProps} />
        </ContentfulProvider>
      </ChakraProvider>
    </>
  )
}

export default CustomApp
