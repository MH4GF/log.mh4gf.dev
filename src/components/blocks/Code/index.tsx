import { FC } from 'react'

import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn'

export const Code: FC<BlockViewProps<'code'>> = ({ block }) => {
  return (
    <div className="bg-slate-700 p-4 rounded">
      {block.code.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </div>
  )
}
