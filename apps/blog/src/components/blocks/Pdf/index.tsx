import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Pdf: FC<BlockViewProps<'pdf'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
