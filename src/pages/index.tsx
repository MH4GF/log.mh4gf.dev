import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

import { IndexPage } from 'src/components/Pages/IndexPage'
import { NotionClient } from 'src/lib/notion/client'

type Props = {
  articles: {
    slug: string
    title: string
    publishedAt: string
  }[]
}

const Page: NextPage<Props> = ({ articles }) => {
  return <IndexPage articles={articles} />
}

export default Page

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new NotionClient(process.env.NOTION_TOKEN)
  const pages = await client.fetchDatabasePages(process.env.NOTION_DATABASE_ID)
  const articles = pages.map((page) => {
    const title =
      page.properties['title'].type === 'title'
        ? page.properties['title'].title[0].plain_text
        : ''

    return {
      slug: page.id,
      title: title,
      publishedAt: page.created_time,
    }
  })

  return { props: { articles } }
}
