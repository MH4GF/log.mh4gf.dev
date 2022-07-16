import Head from 'next/head'
import type { FC } from 'react'

const DEFAULT_URL = 'https://log.mh4gf.dev'
const DEFAULT_TITLE = 'log.mh4gf.dev'
const DEFAULT_DESCRIPTION = 'Logs by Hirotaka Miyagi'

type Props = {
  title?: string
}

export const Ogp: FC<Props> = ({ title }) => {
  return (
    <Head>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <meta name="theme-color" content="#333" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || DEFAULT_TITLE} />
      <meta property="og:url" content={DEFAULT_URL} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${DEFAULT_URL}/ogp.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
