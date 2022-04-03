import { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { NotionClient } from '~/src/lib/notion/client'
import { Article, ArticleData } from '~/src/model/Article'

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = ArticleData

const Page: NextPage<Props> = (props) => {
  const article = new Article({ slug: props.slug, title: props.title })
  return <div>{article.title}</div>
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
  const data = await client.fetchPage(params.id)
  const title =
    data.properties['title'].type === 'title'
      ? data.properties['title'].title[0].plain_text
      : ''

  return { props: { slug: params.id, title: title } }
}
