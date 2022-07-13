import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const NumberedListItem: FC<BlockViewProps<'numbered_list_item'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
