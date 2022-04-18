import { FC } from 'react'

import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn'

export const Quote: FC<BlockViewProps<'quote'>> = ({ block }) => {
  return (
    <div className="border-l-2 p-3">
      {block.quote.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </div>
  )
}
