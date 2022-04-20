import type { GetStaticProps, NextPageWithLayout } from 'next'
import React from 'react'

import { IndexPage } from 'src/components/Pages/IndexPage'
import { Layout } from 'src/components/Pages/Layout'
import { NotionClient, LogLevel } from '~/src/lib/ntn'

type Props = {
  articles: {
    slug: string
    title: string
    publishedAt: string
  }[]
}

const Page: NextPageWithLayout<Props> = ({ articles }) => {
  return <IndexPage articles={articles} />
}

export default Page

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new NotionClient({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG,
  })
  const pages = await client.fetchDatabasePages(process.env.NOTION_DATABASE_ID)
  const articles = pages.map((page) => {
    const title =
      page.properties['title'].type === 'title' ? page.properties['title'].title[0].plain_text : ''

    return {
      slug: page.id,
      title: title,
      publishedAt: page.created_time,
    }
  })

  return { props: { articles } }
}

Page.getLayout = (page) => <Layout>{page}</Layout>
