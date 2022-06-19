import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn'

export const Paragraph: React.FC<BlockViewProps<'paragraph'>> = ({ block }) => {
  return (
    <p>
      {block.paragraph.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </p>
  )
}
