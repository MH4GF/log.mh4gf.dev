import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Callout: FC<BlockViewProps<'callout'>> = ({ block }) => {
  const text = block.callout.rich_text.map((text) => text.plain_text).join()
  return <div>{text}</div>
}
