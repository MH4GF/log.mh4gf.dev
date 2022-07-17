import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Breadcrumb: FC<BlockViewProps<'breadcrumb'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
