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
    outerLink: string
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
  const pages = await client.fetchDatabasePages({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [{ property: 'publishedAt', direction: 'descending' }],
  })
  const articles = pages.map((page) => {
    const publishedAt =
      (page.properties['publishedAt'].type === 'date' &&
        page.properties['publishedAt'].date?.start) ||
      ''
    const title =
      page.properties['title'].type === 'title' ? page.properties['title'].title[0].plain_text : ''
    const outerLink =
      page.properties['outerLink'].type === 'url' ? page.properties['outerLink'].url || '' : ''

    return {
      slug: page.id,
      publishedAt,
      title,
      outerLink,
    }
  })

  return { props: { articles } }
}

Page.getLayout = (page) => <Layout>{page}</Layout>
