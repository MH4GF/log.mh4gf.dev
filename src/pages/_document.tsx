import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const MyDocument = () => {
  const url = '<https://example.com>'
  const title = 'Demo Next.js'
  const description = 'Demo of Next.js'

  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#333" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/ogp.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className="overscroll-y-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
