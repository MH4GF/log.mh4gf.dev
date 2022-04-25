import { ArticleList } from '~/src/components/ArticleList'

type Props = {
  articles: {
    slug: string
    title: string
    publishedAt: string
    outerLink: string
  }[]
}

export const IndexPage: React.FC<Props> = ({ articles }) => {
  return <ArticleList articles={articles} />
}
