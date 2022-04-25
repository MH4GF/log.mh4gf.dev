import Link from 'next/link'
import { FC, ReactNode } from 'react'

import { ConditionalWrapper } from '~/src/components/utils/ConditionalWrapper'
import { pagesPath } from '~/src/generated/$path'
import { RichTextObject } from '~/src/lib/ntn'

interface Props {
  richText: RichTextObject
}

const underlineClass = 'underline decoration-white'

// TODO: support colors
const classNames = (annotations: RichTextObject['annotations']) => {
  const classes = ['text-white']

  if (annotations.underline) classes.push(...classes, 'underline')
  if (annotations.code) classes.push(...classes, 'rounded', 'bg-gray-500')

  return classes
}

const href = (richText: RichTextObject): { url: string; internal: boolean } => {
  if (richText.type === 'text' && richText.text.link !== null) {
    return { url: richText.text.link.url, internal: false }
  }

  if (richText.type !== 'mention') {
    return { url: '', internal: false }
  }

  switch (richText.mention.type) {
    case 'page':
      return { url: richText.mention.page.id, internal: true }
    case 'database':
      return { url: richText.mention.database.id, internal: true }
    default:
      return { url: '', internal: true }
  }
}

const link = (url: string, internal: boolean, children: ReactNode) => {
  if (internal) {
    return (
      <Link href={pagesPath.articles._id(url).$url()}>
        <a className={underlineClass}>{children}</a>
      </Link>
    )
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className={underlineClass}>
      {children}
    </a>
  )
}

export const RichText: FC<Props> = ({ richText }) => {
  const { bold, italic, strikethrough } = richText.annotations
  const { url, internal } = href(richText)

  return (
    <ConditionalWrapper cond={url !== ''} node={(c) => link(url, internal, c)}>
      <ConditionalWrapper cond={bold} node={(c) => <strong>{c}</strong>}>
        <ConditionalWrapper cond={italic} node={(c) => <em>{c}</em>}>
          <ConditionalWrapper cond={strikethrough} node={(c) => <s>{c}</s>}>
            <span className={classNames(richText.annotations).join(' ')}>
              {richText.plain_text}
            </span>
          </ConditionalWrapper>
        </ConditionalWrapper>
      </ConditionalWrapper>
    </ConditionalWrapper>
  )
}
