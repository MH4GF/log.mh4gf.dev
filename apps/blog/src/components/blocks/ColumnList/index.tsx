import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const ColumnList: FC<Required<BlockViewProps<'column_list'>>> = ({
  block,
  renderBlocks,
}) => {
  if (!block.children) {
    return <div></div>
  }

  return <div>{renderBlocks(block.children)}</div>
}
