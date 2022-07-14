import 'src/styles/tailwind.css'
import type { AppPropsWithLayout } from 'next/app'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
