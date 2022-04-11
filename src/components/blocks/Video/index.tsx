import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Video: FC<BlockViewProps<'video'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
