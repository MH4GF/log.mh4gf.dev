import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Callout: FC<BlockViewProps<'callout'>> = ({ block }) => {
  const text = block.callout.rich_text.map((text) => text.plain_text).join()
  return <div>{text}</div>
}
