import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Template: FC<BlockViewProps<'template'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
