import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Toggle: FC<BlockViewProps<'toggle'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
