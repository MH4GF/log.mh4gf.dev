import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const Divider: FC<BlockViewProps<'divider'>> = () => {
  return <hr className="border border-solid border-neutral-900" />
}
