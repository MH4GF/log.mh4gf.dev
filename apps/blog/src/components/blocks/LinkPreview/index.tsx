import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const LinkPreview: FC<BlockViewProps<'link_preview'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
