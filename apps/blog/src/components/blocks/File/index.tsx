import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const File: FC<BlockViewProps<'file'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
