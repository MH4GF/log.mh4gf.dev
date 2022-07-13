import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const Template: FC<BlockViewProps<'template'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
