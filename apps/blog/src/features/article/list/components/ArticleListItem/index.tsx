import Link from 'next/link'

import type { ArticleData } from '../../../ArticleModel'

import ExternalLinkIcon from '~/src/assets/svg/external-link.svg'
import { TagChip } from '~/src/components/TagChip'
import { pagesPath } from '~/src/generated/$path'
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
    <li className="grid gap-1">
      <h2 className="text-xl">
        {article.outerLink === ''
          ? internalLink(article.title, article.slug)
          : externalLink(article.title, article.outerLink)}
      </h2>
      <div className="flex justify-between">
        <div className="flex gap-1">
          {article.tags.map((tag) => (
            <TagChip key={tag.name} tag={tag} />
          ))}
        </div>
        <p className="text-gray-200">{dateFormat(new Date(Date.parse(article.publishedAt)))}</p>
      </div>
    </li>
  )
}
