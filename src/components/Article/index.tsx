import { FC } from 'react'

import { renderBlocks } from '../blocks'

import { ArticleModel } from '~/src/model/ArticleModel'

interface Props {
  article: ArticleModel
}
export const Article: FC<Props> = ({ article }) => {
  return (
    <article className="max-w-2xl mx-auto">
      {article.title}
      {renderBlocks({ blocks: article.blocks })}
    </article>
  )
}
