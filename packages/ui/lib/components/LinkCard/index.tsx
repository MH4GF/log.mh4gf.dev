/* eslint-disable @next/next/no-img-element */
import type { ComponentPropsWithoutRef, FC } from 'react'

type Props = {
  url?: string
  title?: string
  description?: string
  imageSrc?: string
  labelledBy?: string
  componentProps?: ComponentPropsWithoutRef<'section'>
}

export const LinkCard: FC<Props> = (props) => {
  const { labelledBy, url, title, description, imageSrc, componentProps } = props

  return (
    <section aria-labelledby={labelledBy} {...componentProps}>
      <a href={url} target="_blank" rel="noreferrer">
        <h1 id={labelledBy}>{title}</h1>
        <p>{description}</p>
        <img src={imageSrc} alt={title} />
      </a>
    </section>
  )
}
