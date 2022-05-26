import type { GetStaticProps, NextPageWithLayout } from 'next'
import React from 'react'

import { IndexPage } from 'src/components/Pages/IndexPage'
import { Layout } from 'src/components/Pages/Layout'
import { ArticleData, ArticleModel } from '~/src/features/article/ArticleModel'
import { NotionClient, LogLevel } from '~/src/lib/ntn'

type Props = {
  articles: ArticleData[]
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
    filter: { property: 'published', checkbox: { equals: true } },
    sorts: [{ property: 'publishedAt', direction: 'descending' }],
  })
  const articles = pages.map((page) => ArticleModel.fromPage(page).toJSON())

  return { props: { articles } }
}

Page.getLayout = (page) => <Layout>{page}</Layout>
