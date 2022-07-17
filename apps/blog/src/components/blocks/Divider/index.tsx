import type { BlockViewProps } from 'notn'
import type { FC } from 'react'

export const Divider: FC<BlockViewProps<'divider'>> = () => {
  return <hr className="my-16 border border-solid border-zinc-700" />
}
