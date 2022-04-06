import { FC } from 'react'

import { BlockViewProps } from '..'

export const NumberedListItem: FC<BlockViewProps<'numbered_list_item'>> = ({
  block,
}) => {
  return <div>not supported block type: {block.type}</div>
}
