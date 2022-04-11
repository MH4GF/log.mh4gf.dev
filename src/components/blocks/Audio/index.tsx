import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Audio: FC<BlockViewProps<'audio'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
