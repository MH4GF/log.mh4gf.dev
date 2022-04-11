import { FC } from 'react'

import { BlockViewProps } from '~/src/lib/ntn/type'
import { RichText } from '../RichText'

export const Quote: FC<BlockViewProps<'quote'>> = ({ block }) => {
  return (
    <div>
      {block.quote.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </div>
  )
}
