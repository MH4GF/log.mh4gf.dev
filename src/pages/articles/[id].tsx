import { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next'
import React, { ReactElement } from 'react'

import { Layout } from '~/src/components/Pages/Layout'
import { ArticleDetail } from '~/src/features/article/detail/compoments/ArticleDetail'
import { articleDetailRepository } from '~/src/features/article/detail/repositories/articleDetailRepository'
import { articlePathRepository } from '~/src/features/article/detail/repositories/articlePathRepository'
import { LogLevel, NotionClient } from '~/src/lib/ntn'
import { ArticleData } from '~/src/model/ArticleModel'

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = {
  article: ArticleData
}

const Page: NextPageWithLayout<Props> = (props) => {
  return <ArticleDetail article={props.article} />
}

export default Page

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const client = new NotionClient({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG,
  })
  const articles = await articlePathRepository(client)

  const paths = articles.map((article) => {
    return {
      params: {
        id: article.slug,
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
  const articleModel = await articleDetailRepository(client, params.id)

  return { props: { article: articleModel.toJSON() } }
}

Page.getLayout = (page: ReactElement<Props>) => (
  <Layout title={page.props.article.title}>{page}</Layout>
)
