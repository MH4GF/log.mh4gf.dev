import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Toggle: FC<BlockViewProps<'toggle'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
