import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const Column: FC<Required<BlockViewProps<'column'>>> = ({ block, renderBlocks }) => {
  if (!block.children) {
    return <div></div>
  }
  return <div>{renderBlocks(block.children)}</div>
}
