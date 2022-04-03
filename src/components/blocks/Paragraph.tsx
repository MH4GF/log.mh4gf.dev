import { BlockObject } from '~/src/lib/notion/type'

type Props = {
  block: BlockObject<'paragraph'>
}

export const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <p className={'text-red-200'}>{block.paragraph.rich_text[0].plain_text}</p>
  )
}
