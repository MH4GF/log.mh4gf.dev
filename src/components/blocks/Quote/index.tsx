import { FC } from 'react'

import { BlockViewProps } from '..'

export const Quote: FC<BlockViewProps<'quote'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
