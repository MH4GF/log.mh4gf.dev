import { FC } from 'react'

import { BlockViewProps } from '..'

export const Divider: FC<BlockViewProps<'divider'>> = () => {
  return <hr className="border border-solid border-neutral-900" />
}
