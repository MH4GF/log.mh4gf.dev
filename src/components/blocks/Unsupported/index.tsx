import { FC } from 'react'

import { BlockViewProps } from '..'

export const Unsupported: FC<BlockViewProps<'unsupported'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
