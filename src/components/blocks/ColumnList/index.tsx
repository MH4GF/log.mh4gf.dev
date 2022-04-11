import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const ColumnList: FC<Required<BlockViewProps<'column_list'>>> = ({
  block,
  renderBlocks,
}) => {
  if (!block.children) {
    return <div></div>
  }

  return <div>{renderBlocks(block.children)}</div>
}
