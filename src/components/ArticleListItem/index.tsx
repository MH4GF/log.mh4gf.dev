import Link from 'next/link'

import { pagesPath } from '~/src/generated/$path'

type Props = {
  article: {
    slug: string
    title: string
    publishedAt: string
    outerLink: string
  }
}

const internalLink = (title: string, slug: string) => {
  return (
    <Link href={pagesPath.articles._id(slug).$url()}>
      <a>{title}</a>
    </Link>
  )
}

const externalLink = (title: string, outerLink: string) => {
  return (
    <a className="text-white underline" href={outerLink} target="_blank" rel="noreferrer">
      {title}
    </a>
  )
}

export const ArticleListItem: React.FC<Props> = ({ article }) => {
  return (
    <li>
      {article.outerLink === ''
        ? internalLink(article.title, article.slug)
        : externalLink(article.title, article.outerLink)}
      <p>{article.publishedAt}</p>
    </li>
  )
}
