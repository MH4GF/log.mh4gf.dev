import { FC } from 'react'

import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn'

export const BulletedListItem: FC<Required<BlockViewProps<'bulleted_list_item'>>> = ({
  block,
  renderBlocks,
}) => {
  return (
    <ul className="ml-6 list-disc">
      <li>
        {block.bulleted_list_item.rich_text.map((text) => (
          <RichText key={text.plain_text} richText={text} />
        ))}
      </li>
      {block.children && renderBlocks(block.children)}
    </ul>
  )
}
