import { FC } from 'react'

import { BlockViewProps, renderBlocks } from '..'

export const Column: FC<BlockViewProps<'column'>> = ({ block }) => {
  if (!block.children) {
    return <div></div>
  }
  return <div>{renderBlocks({ blocks: block.children })}</div>
}
