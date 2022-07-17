import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const NumberedListItem: FC<BlockViewProps<'numbered_list_item'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
