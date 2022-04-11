import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const LinkToPage: FC<BlockViewProps<'link_to_page'>> = ({ block }) => {
  return <div>not supported block type: {block.type}</div>
}
