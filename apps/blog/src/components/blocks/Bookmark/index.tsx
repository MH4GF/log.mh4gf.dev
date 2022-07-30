/* eslint-disable @next/next/no-img-element */
import type { FC } from 'react'
import { Suspense } from 'react'
import { LinkCard } from 'ui'

import type { BlockViewProps } from '~/src/components/blocks/types'
import { useOGP } from '~/src/features/article/parseOGP/hooks/useOGP'

type Props = {
  url?: string
  title?: string
  description?: string
  image?: string
}

/**
 * @package
 */
export const BookMarkCard: FC<Props> = (props) => (
  <LinkCard className="border-zinc-800" {...props} />
)

type BookmarkBlockProps = {
  url: string
}

const BookmarkBlock: FC<BookmarkBlockProps> = (props) => {
  const { result } = useOGP(props.url)

  return (
    <BookMarkCard
      url={result.url}
      title={result.title}
      description={result.description}
      image={result.image}
    />
  )
}

export const Bookmark: FC<BlockViewProps<'bookmark'>> = ({ block }) => {
  return (
    <Suspense fallback={<BookMarkCard />}>
      <BookmarkBlock url={block.bookmark.url} />
    </Suspense>
  )
}
