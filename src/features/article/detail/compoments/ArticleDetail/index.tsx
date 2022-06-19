import axios from 'axios'
import { FC } from 'react'

import { ArticleData } from '../../../ArticleModel'

import { blockRenderRules, Meta } from '~/src/components/blocks/blockRenderRules'
import { useRenderBlocks } from '~/src/lib/ntn'

interface Props {
  article: ArticleData
  meta: Meta
}

export const ArticleDetail: FC<Props> = ({ article, meta }) => {
  const { renderBlocks } = useRenderBlocks(blockRenderRules)

  return (
    <article>
      <h1 className="text-4xl font-bold text-white">{article.title}</h1>
      {/* TODO: タグ */}
      <div className="mt-6 grid gap-3">{renderBlocks(article.blocks, meta)}</div>
    </article>
  )
}
