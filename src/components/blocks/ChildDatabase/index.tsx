import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const ChildDatabase: FC<BlockViewProps<'child_database'>> = ({
  block,
}) => {
  return <div>not supported block type: {block.type}</div>
}
