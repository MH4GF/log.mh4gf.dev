import type { GetStaticProps, NextPageWithLayout } from 'next'
import React from 'react'

import { IndexPage } from 'src/components/Pages/IndexPage'
import { Layout } from 'src/components/Pages/Layout'
import { ArticleData } from '~/src/features/article/ArticleModel'
import { articleListRepository } from '~/src/features/article/list/repositories/articleListRepository'
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
  const articles = await articleListRepository(client)
  return { props: { articles } }
}

Page.getLayout = (page) => <Layout>{page}</Layout>
