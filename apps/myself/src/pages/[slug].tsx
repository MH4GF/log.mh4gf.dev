import type { ParsedUrlQuery } from 'querystring'

import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next'

import { ArticlePage } from '~/src/components/pages/ArticlePage'
import type { Article } from '~/src/features/article'
import { articleDetailRepository, articlePathRepository } from '~/src/features/article/server'

type Props = {
  article: Article
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Page: NextPageWithLayout<Props> = ({ article }) => {
  return <ArticlePage markdownText={article.markdownText} />
}

export default Page

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await articlePathRepository()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) {
    throw new Error('unexpected state, params is not found')
  }

  const article = await articleDetailRepository(params.slug)

  return { props: { article } }
}
