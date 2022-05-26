import { ArticleListItem } from '../ArticleListItem'

import { ArticleData } from '~/src/model/ArticleModel'

type Props = {
  articles: ArticleData[]
}

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <ul className="grid gap-8 py-4">
      {articles.map((article) => (
        <ArticleListItem key={article.slug} article={article} />
      ))}
    </ul>
  )
}
