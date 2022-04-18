import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const Breadcrumb: FC<BlockViewProps<'breadcrumb'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
