import { FC } from 'react'

import { RichTextObject } from '~/src/lib/notion/type'

interface Props {
  richText: RichTextObject
}

export const RichText: FC<Props> = ({ richText }) => {
  return <p>{richText.plain_text}</p>
}
