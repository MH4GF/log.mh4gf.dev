import { FC } from 'react'

import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn'

export const BulletedListItem: FC<Required<BlockViewProps<'bulleted_list_item'>>> = ({
  block,
  renderBlocks,
}) => {
  return (
    <ul className="ml-6 list-disc">
      {block.bulleted_list_item.rich_text.map((text) => (
        <li key={text.plain_text}>
          <RichText richText={text} />
        </li>
      ))}
      {block.children && renderBlocks(block.children)}
    </ul>
  )
}
