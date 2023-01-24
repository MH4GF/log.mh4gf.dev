import type { FC } from 'react'
import { Text } from 'ui'

import { RichText } from '../RichText'

import type { BlockViewProps } from '~/src/components/blocks/types'

export const Paragraph: FC<BlockViewProps<'paragraph'>> = ({ block }) => {
  return (
    <Text>
      {block.paragraph.rich_text.map((text) => (
        <RichText key={text.plain_text} richText={text} />
      ))}
    </Text>
  )
}
