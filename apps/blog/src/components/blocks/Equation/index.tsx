import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Equation: FC<BlockViewProps<'equation'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
