import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

import { Footer } from '~/src/components/Footer'
import { Header } from '~/src/components/Header'
import { GoogleTagManaagerId, GoogleTagManager } from '~/src/components/utils/GoogleTagManager'

interface Props {
  children: ReactNode
  title?: string
}

const gtmId = process.env.NEXT_PUBLIC_GTM_ID as GoogleTagManaagerId

export const Layout = ({ children, title }: Props): ReactElement => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-800 p-8 text-white">
      <Head>
        <title>{title || 'log.mh4gf.dev'}</title>
      </Head>
      <GoogleTagManager gtmId={gtmId} />
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-16">
        <Header />
        {children}
        <Footer className="mx-auto mt-auto" />
      </div>
    </div>
  )
}
