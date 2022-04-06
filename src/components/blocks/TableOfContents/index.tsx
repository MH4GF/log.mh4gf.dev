import { FC } from 'react'

import { BlockViewProps } from '..'

export const TableOfContents: FC<BlockViewProps<'table_of_contents'>> = ({
  block,
}) => {
  return <div>not supported block type: {block.type}</div>
}
