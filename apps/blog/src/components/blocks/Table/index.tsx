import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Table: FC<BlockViewProps<'table'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
