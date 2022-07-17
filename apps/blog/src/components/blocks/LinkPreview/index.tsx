import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const LinkPreview: FC<BlockViewProps<'link_preview'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
