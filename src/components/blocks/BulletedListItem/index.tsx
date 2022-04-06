import { FC } from 'react'

import { BlockViewProps } from '..'

export const BulletedListItem: FC<BlockViewProps<'bulleted_list_item'>> = ({
  block,
}) => {
  return <div>not supported block type: {block.type}</div>
}
