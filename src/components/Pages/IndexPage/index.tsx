import { ArticleList } from '~/src/components/ArticleList'
import { ArticleData } from '~/src/features/article/ArticleModel'

type Props = {
  articles: ArticleData[]
}

export const IndexPage: React.FC<Props> = ({ articles }) => {
  return (
    <div className="my-16">
      <ArticleList articles={articles} />
    </div>
  )
}
