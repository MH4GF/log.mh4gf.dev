import { Html, Main, NextScript, Head } from 'next/document'
import React from 'react'

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head />
      <body className="bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
