import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const ToDo: FC<BlockViewProps<'to_do'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
