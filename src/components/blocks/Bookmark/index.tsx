import { FC } from 'react'

import { BlockViewProps } from '..'

export const Bookmark: FC<BlockViewProps<'bookmark'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
