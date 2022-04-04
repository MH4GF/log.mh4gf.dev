import Link from 'next/link'

import { pagesPath } from '~/src/generated/$path'

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
      <Link href={pagesPath.articles._id(article.slug).$url()}>
        {article.title}
      </Link>
      <p>{article.publishedAt}</p>
    </li>
  )
}
