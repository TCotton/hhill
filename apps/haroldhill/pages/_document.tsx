import React, { ReactElement } from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export async function getInitialProps(ctx: DocumentContext) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheet.getStyleElement()
      ]
    }
  } finally {
    sheet.seal()
  }
}
export default function MyDocument(props): ReactElement {
  const { styleTags } = props
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        {styleTags}
      </Head>
      <body>
        <script>
          document.body.className = ((document.body.className) ?
          document.body.className + ` js-enabled` : `js-enabled`);
        </script>
        <a
          href="#content"
          className="govuk-skip-link"
          data-module="govuk-skip-link">
          Skip to main content
        </a>
        <a id="top"></a>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
