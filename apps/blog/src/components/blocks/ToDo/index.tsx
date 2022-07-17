import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const ToDo: FC<BlockViewProps<'to_do'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
