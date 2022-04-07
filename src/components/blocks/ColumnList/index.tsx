import { FC } from 'react'

import { BlockViewProps, renderBlocks } from '..'

export const ColumnList: FC<BlockViewProps<'column_list'>> = ({ block }) => {
  if (!block.children) {
    return <div></div>
  }

  return <div>{renderBlocks({ blocks: block.children })}</div>
}
