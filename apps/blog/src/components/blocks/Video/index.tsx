import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Video: FC<BlockViewProps<'video'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
