import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const LinkPreview: FC<BlockViewProps<'link_preview'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
