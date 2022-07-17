import type { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next'
import { LogLevel, NotionClient } from 'notn'
import type { ReactElement } from 'react'
import React from 'react'

import { Layout } from '~/src/components/Pages/Layout'
import type { ArticleData } from '~/src/features/article/ArticleModel'
import { ArticleDetail } from '~/src/features/article/detail/compoments/ArticleDetail'
import { articleDetailRepository } from '~/src/features/article/detail/repositories/articleDetailRepository'
import { articlePathRepository } from '~/src/features/article/detail/repositories/articlePathRepository'

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

const client = new NotionClient({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
})
export const getStaticPaths: GetStaticPaths<Params> = async () => {
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
  const articleModel = await articleDetailRepository(client, params.id)

  return { props: { article: articleModel.toJSON() } }
}

Page.getLayout = (page: ReactElement<Props>) => (
  <Layout title={page.props.article.title}>{page}</Layout>
)
