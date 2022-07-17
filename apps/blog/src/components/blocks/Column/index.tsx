import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Column: FC<Required<BlockViewProps<'column'>>> = ({ block, renderBlocks }) => {
  if (!block.children) {
    return <div></div>
  }
  return <div>{renderBlocks(block.children)}</div>
}
