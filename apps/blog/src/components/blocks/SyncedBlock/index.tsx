import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const SyncedBlock: FC<Required<BlockViewProps<'synced_block'>>> = ({
  block,
  renderBlocks,
}) => {
  return <div>{block.children && renderBlocks(block.children)}</div>
}
