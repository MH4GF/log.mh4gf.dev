import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Equation: FC<BlockViewProps<'equation'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
