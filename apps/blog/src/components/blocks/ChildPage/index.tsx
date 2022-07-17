import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const ChildPage: FC<BlockViewProps<'child_page'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
