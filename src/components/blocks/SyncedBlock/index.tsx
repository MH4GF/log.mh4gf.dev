import { FC } from 'react'

import { BlockViewProps } from '..'

export const SyncedBlock: FC<BlockViewProps<'synced_block'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
