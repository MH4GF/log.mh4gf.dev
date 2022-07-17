import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Audio: FC<BlockViewProps<'audio'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
