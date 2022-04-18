import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const File: FC<BlockViewProps<'file'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
