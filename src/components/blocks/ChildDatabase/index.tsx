import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const ChildDatabase: FC<BlockViewProps<'child_database'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
