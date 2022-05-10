import { ArticleListItem } from '../ArticleListItem'

type Props = {
  articles: {
    slug: string
    title: string
    publishedAt: string
    outerLink: string
  }[]
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
