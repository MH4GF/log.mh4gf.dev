import { FC } from 'react'

import { BlockViewProps } from '..'

export const Divider: FC<BlockViewProps<'divider'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
