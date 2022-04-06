import { FC } from 'react'

import { BlockViewProps } from '..'

export const Equation: FC<BlockViewProps<'equation'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
