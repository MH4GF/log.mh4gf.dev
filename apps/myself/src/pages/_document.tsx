import { Html, Main, NextScript, Head } from 'next/document'
import React from 'react'

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
