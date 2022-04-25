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
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      <Head>
        <title>{title || 'log.mh4gf.dev'}</title>
      </Head>
      <div className="mx-auto max-w-2xl">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
