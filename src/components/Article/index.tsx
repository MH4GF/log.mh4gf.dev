import { FC } from 'react'

import { blockSchema } from '../blocks/blockSchema'

import { useRenderBlocks } from '~/src/lib/ntn'
import { ArticleModel } from '~/src/model/ArticleModel'

interface Props {
  article: ArticleModel
}

export const Article: FC<Props> = ({ article }) => {
  const { renderBlocks } = useRenderBlocks(blockSchema)

  return (
    <article className="max-w-2xl mx-auto">
      {article.title}
      {renderBlocks(article.blocks)}
    </article>
  )
}
