import { FC } from 'react'

import { BlockViewProps } from '..'

export const Embed: FC<BlockViewProps<'embed'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
