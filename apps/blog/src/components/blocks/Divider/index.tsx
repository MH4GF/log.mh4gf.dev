import type { FC } from 'react'

import type { BlockViewProps } from '~/src/lib/ntn'

export const Divider: FC<BlockViewProps<'divider'>> = () => {
  return <hr className="my-16 border border-solid border-zinc-700" />
}
