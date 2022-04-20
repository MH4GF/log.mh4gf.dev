import { FC } from 'react'

import { RichText } from '../RichText'

import { BlockViewProps } from '~/src/lib/ntn'

export const Heading1: FC<BlockViewProps<'heading_1'>> = ({ block }) => {
  return (
    <h1 className="text-2xl font-bold">
      {block.heading_1.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </h1>
  )
}

export const Heading2: FC<BlockViewProps<'heading_2'>> = ({ block }) => {
  return (
    <h2 className="text-xl font-bold">
      {block.heading_2.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </h2>
  )
}

export const Heading3: FC<BlockViewProps<'heading_3'>> = ({ block }) => {
  return (
    <h3 className="text-lg font-bold">
      {block.heading_3.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </h3>
  )
}
