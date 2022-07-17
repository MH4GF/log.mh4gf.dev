import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Breadcrumb: FC<BlockViewProps<'breadcrumb'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
