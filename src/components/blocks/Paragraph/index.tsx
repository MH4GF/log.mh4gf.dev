import { BlockViewProps } from '~/src/lib/ntn'

export const Paragraph: React.FC<BlockViewProps<'paragraph'>> = ({ block }) => {
  const text = block.paragraph.rich_text.map((item) => item.plain_text).join()

  return <p className={'text-red-200'}>{text}</p>
}
