import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const LinkToPage: FC<BlockViewProps<'link_to_page'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
