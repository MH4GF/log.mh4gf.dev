import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const ChildDatabase: FC<BlockViewProps<'child_database'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
