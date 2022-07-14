/* eslint-disable @next/next/no-img-element */
import type { FC } from 'react'
import { Suspense, useId } from 'react'

import { useOGP } from '~/src/features/article/parseOGP/hooks/useOGP'
import type { BlockViewProps } from '~/src/lib/ntn'

type Props = {
  url?: string
  title?: string
  description?: string
  image?: string
}

/**
 * @package
 */
export const BookMarkCard: FC<Props> = (props) => {
  const { url, title, description, image } = props
  const headingId = useId()

  return (
    <section
      aria-labelledby={headingId}
      className="h-24 rounded border border-zinc-700 hover:bg-zinc-800"
    >
      <a href={url} className="flex h-full" target="_blank" rel="noreferrer">
        <div className="w-8/12 p-2 md:w-9/12">
          <h3 id={headingId}>{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <div className="w-4/12 md:w-3/12">
          <img alt={title} src={image} className="h-full w-full object-cover" />
        </div>
      </a>
    </section>
  )
}

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
