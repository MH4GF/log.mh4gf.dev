import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

import { Header } from '~/src/components/Header'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title }: Props): ReactElement => {
  return (
    <div>
      <Head>{title || 'log.mh4gf.dev'}</Head>
      <Header />
      {children}
    </div>
  )
}
