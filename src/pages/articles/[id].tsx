import { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { NotionClient } from '~/src/lib/notion/client'
import { BlockObject } from '~/src/lib/notion/type'
import { Article } from '~/src/model/Article'

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = {
  slug: string
  title: string
  blocks: BlockObject[]
}

const Page: NextPage<Props> = ({ slug, title, blocks }) => {
  const article = new Article({ slug, title })

  return (
    <div>
      {article.title}
      {blocks[0].type === 'paragraph'
        ? blocks[0].paragraph.rich_text[0].plain_text
        : null}
    </div>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const client = new NotionClient(process.env.NOTION_TOKEN)
  const pages = await client.fetchDatabasePages(process.env.NOTION_DATABASE_ID)

  const paths = pages.map((page) => {
    return {
      params: {
        id: page.id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) {
    throw new Error('unexpected state, params is not found')
  }

  const client = new NotionClient(process.env.NOTION_TOKEN)
  const page = await client.fetchPage(params.id)
  const blocks = await client.fetchBlockChildren(page.id)
  const title =
    page.properties['title'].type === 'title'
      ? page.properties['title'].title[0].plain_text
      : ''

  return { props: { slug: params.id, title, blocks: blocks } }
}
