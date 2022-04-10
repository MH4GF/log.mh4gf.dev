import { FC } from 'react'

import { BlockViewProps } from '..'

export const TableRow: FC<BlockViewProps<'table_row'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}