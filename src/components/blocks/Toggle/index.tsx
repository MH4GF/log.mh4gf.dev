import { FC } from 'react'

import { BlockViewProps } from '..'

export const Toggle: FC<BlockViewProps<'toggle'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
