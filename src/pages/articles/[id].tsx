import { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { NotionClient } from '~/src/lib/notion/client'

interface Params extends ParsedUrlQuery {
  id: string
}

interface Props {
  id: string
}

const Page: NextPage<Props> = ({ id }) => {
  return <div>{id}</div>
}

export default Page

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const client = new NotionClient(process.env.NOTION_TOKEN)
  const pages = await client.fetchDatabasePages(process.env.NOTION_DATABASE_ID)

  const paths = pages.map((page) => ({
    params: {
      id: page.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  return { props: { id: params?.id || '' } }
}
