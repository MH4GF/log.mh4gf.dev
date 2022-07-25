import type { NextPageWithLayout } from 'next'

import { HomePage } from '~/src/components/pages/HomePage'
import { Layout } from '~/src/components/pages/Layout'

const Page: NextPageWithLayout = () => {
  return <HomePage />
}

export default Page

Page.getLayout = (page) => <Layout>{page}</Layout>
