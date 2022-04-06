import { FC } from 'react'

import { BlockViewProps } from '..'

export const Template: FC<BlockViewProps<'template'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
