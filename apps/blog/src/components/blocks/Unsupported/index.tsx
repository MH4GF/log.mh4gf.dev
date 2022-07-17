import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Unsupported: FC<BlockViewProps<'unsupported'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
