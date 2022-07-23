import type { FC } from 'react'
import { Heading1 as H1, Heading2 as H2, Heading3 as H3 } from 'ui'

import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Heading1: FC<BlockViewProps<'heading_1'>> = ({ block }) => {
  return (
    <H1>
      {block.heading_1.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </H1>
  )
}

export const Heading2: FC<BlockViewProps<'heading_2'>> = ({ block }) => {
  return (
    <H2>
      {block.heading_2.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </H2>
  )
}

export const Heading3: FC<BlockViewProps<'heading_3'>> = ({ block }) => {
  return (
    <H3>
      {block.heading_3.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </H3>
  )
}
