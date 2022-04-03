import Link from 'next/link'

type Props = {
  article: {
    slug: string
    title: string
    publishedAt: string
  }
}
export const ArticleListItem: React.FC<Props> = ({ article }) => {
  return (
    <li>
      <Link href={`articles/${article.slug}`}>{article.title}</Link>
      <p>{article.publishedAt}</p>
    </li>
  )
}
