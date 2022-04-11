import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const ChildPage: FC<BlockViewProps<'child_page'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
