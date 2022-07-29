import type { FC } from 'react'
import { UnorderedList } from 'ui'

import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const BulletedListItem: FC<Required<BlockViewProps<'bulleted_list_item'>>> = ({
  block,
  renderBlocks,
}) => {
  return (
    <UnorderedList>
      <li>
        {block.bulleted_list_item.rich_text.map((text, index) => (
          <RichText key={`${block.id}_${index}`} richText={text} />
        ))}
      </li>
      {block.children && renderBlocks(block.children)}
    </UnorderedList>
  )
}
