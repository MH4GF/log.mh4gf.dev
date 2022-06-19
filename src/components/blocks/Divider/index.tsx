import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn'

export const Divider: FC<BlockViewProps<'divider'>> = () => {
  return <hr className="border border-solid border-white" />
}
