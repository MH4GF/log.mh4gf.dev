import Link from 'next/link'

import ExternalLinkIcon from '~/src/assets/svg/external-link.svg'
import { pagesPath } from '~/src/generated/$path'
import { ArticleData } from '~/src/model/ArticleModel'
import { dateFormat } from '~/src/utils/dateFormat'

type Props = {
  article: ArticleData
}

const internalLink = (title: string, slug: string) => {
  return (
    <Link href={pagesPath.articles._id(slug).$url()}>
      <a className="hover:underline">{title}</a>
    </Link>
  )
}

const externalLink = (title: string, outerLink: string) => {
  return (
    <a className="hover:underline" href={outerLink} target="_blank" rel="noreferrer">
      {title}
      <ExternalLinkIcon width="20" height="20" className="ml-1 inline-block" />
    </a>
  )
}

export const ArticleListItem: React.FC<Props> = ({ article }) => {
  return (
    <li>
      <h2 className="text-xl">
        {article.outerLink === ''
          ? internalLink(article.title, article.slug)
          : externalLink(article.title, article.outerLink)}
      </h2>
      <p className="text-gray-200">{dateFormat(new Date(Date.parse(article.publishedAt)))}</p>
    </li>
  )
}
