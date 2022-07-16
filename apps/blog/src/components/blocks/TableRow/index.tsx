import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const TableRow: FC<BlockViewProps<'table_row'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
