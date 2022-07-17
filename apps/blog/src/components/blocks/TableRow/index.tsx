import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const TableRow: FC<BlockViewProps<'table_row'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
