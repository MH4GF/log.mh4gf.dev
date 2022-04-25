import { FC } from 'react'

import { blockRenderRules } from '../blocks/blockRenderRules'

import { useRenderBlocks } from '~/src/lib/ntn'
import { ArticleModel } from '~/src/model/ArticleModel'

interface Props {
  article: ArticleModel
}

export const Article: FC<Props> = ({ article }) => {
  const { renderBlocks } = useRenderBlocks(blockRenderRules)

  return (
    <article>
      <h1 className="text-4xl font-bold text-white">{article.title}</h1>
      {/* TODO: タグ */}
      <div className="mt-6 grid gap-4">{renderBlocks(article.blocks)}</div>
    </article>
  )
}
