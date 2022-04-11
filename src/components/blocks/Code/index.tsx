import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Code: FC<BlockViewProps<'code'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
