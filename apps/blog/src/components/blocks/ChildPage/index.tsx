import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const ChildPage: FC<BlockViewProps<'child_page'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
