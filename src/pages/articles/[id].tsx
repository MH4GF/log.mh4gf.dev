import { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next'
import React, { ReactElement } from 'react'

import { Article } from '~/src/components/Article'
import { blockParseRules } from '~/src/components/blocks/blockParseRules'
import { Layout } from '~/src/components/Pages/Layout'
import { BlockObject, buildBlockParser, LogLevel, NotionClient } from '~/src/lib/ntn'
import { ArticleModel } from '~/src/model/ArticleModel'

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = {
  slug: string
  title: string
  blocks: BlockObject[]
}

const Page: NextPageWithLayout<Props> = (props) => {
  const article = new ArticleModel(props)

  return <Article article={article} />
}

export default Page

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const client = new NotionClient({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG,
  })
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

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) {
    throw new Error('unexpected state, params is not found')
  }

  const client = new NotionClient({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG,
  })
  const page = await client.fetchPage(params.id)
  const blockObjects = await client.fetchBlockChildren(page.id)
  const title =
    page.properties['title'].type === 'title' ? page.properties['title'].title[0].plain_text : ''

  const parser = buildBlockParser(blockParseRules)
  const blocks = await parser.parse(blockObjects)

  return { props: { slug: params.id, title, blocks: blocks } }
}

Page.getLayout = (page: ReactElement<Props>) => <Layout title={page.props.title}>{page}</Layout>
