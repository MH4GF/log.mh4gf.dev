import { FC } from 'react'

import { BlockViewProps } from '..'

export const Image: FC<BlockViewProps<'image'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
