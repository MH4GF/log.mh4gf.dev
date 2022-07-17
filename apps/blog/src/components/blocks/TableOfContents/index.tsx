import type { FC } from 'react'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const TableOfContents: FC<BlockViewProps<'table_of_contents'>> = ({ block }) => {
  // https://developers.notion.com/reference/block#table-of-contents-blocks
  // blockには色情報しか保存されていない
  // TODO: 見出しを別で取得するしかない？
  return <div>not supported block type: {block.type}</div>
}
