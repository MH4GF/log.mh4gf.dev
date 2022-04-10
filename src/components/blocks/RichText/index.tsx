import { FC } from 'react'

import { RichTextObject } from '~/src/lib/ntn'

interface Props {
  richText: RichTextObject
}

export const RichText: FC<Props> = ({ richText }) => {
  return <p>{richText.plain_text}</p>
}
