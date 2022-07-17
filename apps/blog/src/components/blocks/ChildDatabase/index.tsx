import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const ChildDatabase: FC<BlockViewProps<'child_database'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
