import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const ToDo: FC<BlockViewProps<'to_do'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
