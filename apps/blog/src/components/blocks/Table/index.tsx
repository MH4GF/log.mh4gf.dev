import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Table: FC<BlockViewProps<'table'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
