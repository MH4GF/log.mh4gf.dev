import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const Audio: FC<BlockViewProps<'audio'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
