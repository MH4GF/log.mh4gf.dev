import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const Unsupported: FC<BlockViewProps<'unsupported'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
