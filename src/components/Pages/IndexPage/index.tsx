import { ArticleData } from '~/src/features/article/ArticleModel'
import { ArticleList } from '~/src/features/article/list/components/ArticleList'

type Props = {
  articles: ArticleData[]
}

export const IndexPage: React.FC<Props> = ({ articles }) => {
  return <ArticleList articles={articles} />
}
