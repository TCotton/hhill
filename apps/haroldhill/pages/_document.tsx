import React, { ReactElement } from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// TODO: Fix this
// @ts-ignore
export default class CustomDocument extends Document<{
  styleTags: ReactElement[]
}> {
  static getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()

    const page = ctx.renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render(): ReactElement {
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
          {this.props.styleTags}
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
}
