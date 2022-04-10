import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Column: FC<BlockViewProps<'column'>> = ({
  block,
  renderBlocks,
}) => {
  if (!block.children) {
    return <div></div>
  }
  return <div>{renderBlocks(block.children)}</div>
}
