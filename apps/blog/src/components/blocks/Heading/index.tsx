import type { FC } from 'react'

import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Heading1: FC<BlockViewProps<'heading_1'>> = ({ block }) => {
  return (
    <h1 className="mt-5 text-xl font-bold md:text-2xl">
      {block.heading_1.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </h1>
  )
}

export const Heading2: FC<BlockViewProps<'heading_2'>> = ({ block }) => {
  return (
    <h2 className="mt-4 text-lg font-bold md:text-xl">
      {block.heading_2.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </h2>
  )
}

export const Heading3: FC<BlockViewProps<'heading_3'>> = ({ block }) => {
  return (
    <h3 className="mt-3 text-base font-bold md:text-lg">
      {block.heading_3.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </h3>
  )
}
