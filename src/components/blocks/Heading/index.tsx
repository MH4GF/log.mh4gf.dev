import { FC } from 'react'

import { BlockViewProps } from '..'

export const Heading1: FC<BlockViewProps<'heading_1'>> = ({ block }) => {
  const text = block.heading_1.rich_text.map((text) => text.plain_text).join()
  return <h1>{text}</h1>
}

export const Heading2: FC<BlockViewProps<'heading_2'>> = ({ block }) => {
  const text = block.heading_2.rich_text.map((text) => text.plain_text).join()
  return <h2>{text}</h2>
}

export const Heading3: FC<BlockViewProps<'heading_3'>> = ({ block }) => {
  const text = block.heading_3.rich_text.map((text) => text.plain_text).join()
  return <h3>{text}</h3>
}
