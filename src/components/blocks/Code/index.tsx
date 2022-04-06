import { FC } from 'react'

import { BlockViewProps } from '..'

export const Code: FC<BlockViewProps<'code'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
