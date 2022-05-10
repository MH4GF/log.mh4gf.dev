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
    <div className="min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800 p-8 text-white">
      <Head>
        <title>{title || 'log.mh4gf.dev'}</title>
      </Head>
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col">
        <Header />
        {children}
        <Footer className="mx-auto mt-auto" />
      </div>
    </div>
  )
}
