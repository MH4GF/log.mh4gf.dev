import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Paragraph: React.FC<BlockViewProps<'paragraph'>> = ({ block }) => {
  return (
    <p>
      {block.paragraph.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </p>
  )
}
