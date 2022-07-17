import type { FC } from 'react'

import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Code: FC<BlockViewProps<'code'>> = ({ block }) => {
  return (
    <div className="rounded bg-slate-700 p-4">
      {block.code.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </div>
  )
}
