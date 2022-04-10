import { FC } from 'react'

import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn/type'

export const BulletedListItem: FC<BlockViewProps<'bulleted_list_item'>> = ({
  block,
  renderBlocks,
}) => {
  return (
    <ul className="list-disc ml-6">
      {block.bulleted_list_item.rich_text.map((text) => (
        <li key={text.plain_text}>
          <RichText richText={text} />
        </li>
      ))}
      {block.children && renderBlocks(block.children)}
    </ul>
  )
}
