import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

import { Footer } from '~/src/components/Footer'
import { Header } from '~/src/components/Header'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title }: Props): ReactElement => {
  return (
    <div>
      <Head>
        <title>{title || 'log.mh4gf.dev'}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
