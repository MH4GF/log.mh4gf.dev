import type { AppProps } from 'next/app'
import React from 'react'
import 'src/styles/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
