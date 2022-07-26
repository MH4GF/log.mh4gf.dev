import type { FC } from 'react'
import React from 'react'

import { main } from './ArticlePage.css'

import { MarkdownArticle } from '~/src/features/markdown'

type Props = {
  markdownText: string
}
export const ArticlePage: FC<Props> = (props) => {
  return (
    <main className={main}>
      <MarkdownArticle markdownText={props.markdownText} />
    </main>
  )
}
