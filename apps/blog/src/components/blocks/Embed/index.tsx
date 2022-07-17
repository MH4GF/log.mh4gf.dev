import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Embed: FC<BlockViewProps<'embed'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
