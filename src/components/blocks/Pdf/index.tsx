import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Pdf: FC<BlockViewProps<'pdf'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
