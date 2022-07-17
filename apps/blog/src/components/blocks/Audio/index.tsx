import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Audio: FC<BlockViewProps<'audio'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
