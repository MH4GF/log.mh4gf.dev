import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Embed: FC<BlockViewProps<'embed'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
