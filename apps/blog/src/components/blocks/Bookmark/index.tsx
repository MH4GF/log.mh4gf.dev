/* eslint-disable @next/next/no-img-element */
import type { ComponentProps, FC } from 'react'
import { Suspense } from 'react'
import { LinkCard } from 'ui'

import type { BlockViewProps } from '~/src/components/blocks/types'
import { useOGP } from '~/src/features/article/parseOGP/hooks/useOGP'

const fallbackImageSrc = '/default.png'

type Props = ComponentProps<typeof LinkCard>

/**
 * @package
 */
export const BookMarkCard: FC<Props> = (props) => (
  <LinkCard className="border-zinc-700 hover:bg-zinc-800" {...props} />
)

interface BookmarkBlockProps {
  url: string
}

const BookmarkBlock: FC<BookmarkBlockProps> = (props) => {
  const { result } = useOGP(props.url)

  return (
    <BookMarkCard
      url={result.url}
      title={result.title}
      description={result.description}
      imageSrc={result.imageSrc}
      fallbackImageSrc={fallbackImageSrc}
    />
  )
}

export const Bookmark: FC<BlockViewProps<'bookmark'>> = ({ block }) => {
  return (
    <Suspense fallback={<BookMarkCard fallbackImageSrc="" />}>
      <BookmarkBlock url={block.bookmark.url} />
    </Suspense>
  )
}
