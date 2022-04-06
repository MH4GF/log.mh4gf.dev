import { FC } from 'react'

import { BlockViewProps } from '..'

export const Column: FC<BlockViewProps<'column'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
