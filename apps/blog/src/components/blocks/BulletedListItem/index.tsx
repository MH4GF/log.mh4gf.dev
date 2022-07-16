import type { FC } from 'react'

import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/lib/ntn'

export const BulletedListItem: FC<Required<BlockViewProps<'bulleted_list_item'>>> = ({
  block,
  renderBlocks,
}) => {
  return (
    <ul className="ml-6 list-disc">
      <li>
        {block.bulleted_list_item.rich_text.map((text, index) => (
          <RichText key={`${block.id}_${index}`} richText={text} />
        ))}
      </li>
      {block.children && renderBlocks(block.children)}
    </ul>
  )
}
