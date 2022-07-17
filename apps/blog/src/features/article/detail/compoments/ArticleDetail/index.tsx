import { FC } from 'react'

import { ArticleData } from '../../../ArticleModel'

import { blockRenderRules } from '~/src/components/blocks/blockRenderRules'
import { useRenderBlocks } from 'notn'

interface Props {
  article: ArticleData
}

export const ArticleDetail: FC<Props> = ({ article }) => {
  const { renderBlocks } = useRenderBlocks(blockRenderRules)

  return (
    <article>
      <h1 className="text-xl font-bold md:text-4xl">{article.title}</h1>
      {/* TODO: タグ */}
      <div className="mt-8 grid gap-3 md:mt-10">{renderBlocks(article.blocks)}</div>
    </article>
  )
}
