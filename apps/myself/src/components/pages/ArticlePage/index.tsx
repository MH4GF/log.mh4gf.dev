import type { FC } from 'react'
import React from 'react'

import { MarkdownArticle } from '~/src/features/markdown'

type Props = {
  markdownText: string
}
export const ArticlePage: FC<Props> = (props) => {
  return (
    <main>
      <MarkdownArticle markdownText={props.markdownText} />
    </main>
  )
}
