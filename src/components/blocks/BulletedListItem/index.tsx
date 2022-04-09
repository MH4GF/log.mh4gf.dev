import { FC } from 'react'

import { BlockViewProps, renderBlocks } from '..'
import { RichText } from '../RichText'

export const BulletedListItem: FC<BlockViewProps<'bulleted_list_item'>> = ({
  block,
}) => {
  return (
    <ul className="list-disc ml-6">
      {block.bulleted_list_item.rich_text.map((text) => (
        <li key={text.plain_text}>
          <RichText richText={text} />
        </li>
      ))}
      {block.children && renderBlocks({ blocks: block.children })}
    </ul>
  )
}
