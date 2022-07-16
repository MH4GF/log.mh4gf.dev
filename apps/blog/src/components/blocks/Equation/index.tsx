import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const Equation: FC<BlockViewProps<'equation'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}