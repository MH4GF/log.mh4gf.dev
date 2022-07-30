/* eslint-disable @next/next/no-img-element */
import type { ComponentPropsWithoutRef, FC } from 'react'
import { useId } from 'react'

import { linkStyle, linkCardStyle, titleStyle, descriptionStyle, imageStyle } from './LinkCard.css'

type Props = ComponentPropsWithoutRef<'section'> & {
  url?: string
  title?: string
  description?: string
  imageSrc?: string
}

export const LinkCard: FC<Props> = (props) => {
  const { url, title, description, imageSrc, className } = props
  const labelledBy = useId()

  return (
    <section
      {...props}
      className={`${linkCardStyle} ${className || ''}`}
      aria-labelledby={labelledBy}
    >
      <a className={linkStyle} href={url} target="_blank" rel="noreferrer">
        <h1 className={titleStyle} id={labelledBy}>
          {title}
        </h1>
        <p className={descriptionStyle}>{description}</p>
        <img className={imageStyle} src={imageSrc} alt={title} />
      </a>
    </section>
  )
}
