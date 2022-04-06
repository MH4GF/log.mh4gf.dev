import { FC } from 'react'

import { BlockViewProps } from '..'

export const Audio: FC<BlockViewProps<'audio'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
