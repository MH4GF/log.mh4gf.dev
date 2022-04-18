import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const Table: FC<BlockViewProps<'table'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
