import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const SyncedBlock: FC<Required<BlockViewProps<'synced_block'>>> = ({
  block,
  renderBlocks,
}) => {
  return <div>{block.children && renderBlocks(block.children)}</div>
}
