import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const SyncedBlock: FC<Required<BlockViewProps<'synced_block'>>> = ({
  block,
  renderBlocks,
}) => {
  return <div>{block.children && renderBlocks(block.children)}</div>
}
