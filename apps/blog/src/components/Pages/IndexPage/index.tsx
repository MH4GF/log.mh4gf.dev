import type { FC } from 'react'

import type { ArticleData } from '~/src/features/article/ArticleModel'
import { ArticleList } from '~/src/features/article/list/components/ArticleList'

type Props = {
  articles: ArticleData[]
}

export const IndexPage: FC<Props> = ({ articles }) => {
  return <ArticleList articles={articles} />
}
