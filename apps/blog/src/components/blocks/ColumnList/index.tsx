import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const ColumnList: FC<Required<BlockViewProps<'column_list'>>> = ({
  block,
  renderBlocks,
}) => {
  if (!block.children) {
    return <div></div>
  }

  return <div>{renderBlocks(block.children)}</div>
}
