import { ArticleListItem } from '../ArticleListItem'

type Props = {
  articles: {
    slug: string
    title: string
    publishedAt: string
  }[]
}

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.slug} article={article} />
      ))}
    </ul>
  )
}
