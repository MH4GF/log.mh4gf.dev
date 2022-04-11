import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Toggle: FC<BlockViewProps<'toggle'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
