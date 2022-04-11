import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const TableRow: FC<BlockViewProps<'table_row'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
