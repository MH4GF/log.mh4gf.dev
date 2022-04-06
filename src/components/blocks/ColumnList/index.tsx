import { FC } from 'react'

import { BlockViewProps } from '..'

export const ColumnList: FC<BlockViewProps<'column_list'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
