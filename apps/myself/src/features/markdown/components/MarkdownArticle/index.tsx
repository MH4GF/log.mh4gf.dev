import type { FC } from 'react'
import React, { useMemo } from 'react'

import { processor } from '../../processor'

type Props = {
  markdownText: string
}
export const MarkdownArticle: FC<Props> = (props) => {
  const contents = useMemo(() => {
    return processor.processSync(props.markdownText).result
  }, [props.markdownText])

  return <article>{contents}</article>
}
