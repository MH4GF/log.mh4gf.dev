import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Column: FC<Required<BlockViewProps<'column'>>> = ({ block, renderBlocks }) => {
  if (!block.children) {
    return <div></div>
  }
  return <div>{renderBlocks(block.children)}</div>
}
