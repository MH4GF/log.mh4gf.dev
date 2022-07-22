import type { FC } from 'react'

import { processor } from '../../processor'

type Props = {
  markdownText: string
}
export const MarkdownArticle: FC<Props> = (props) => {
  // TODO: memo
  const contents = processor.processSync(props.markdownText).result

  return <article>{contents}</article>
}
