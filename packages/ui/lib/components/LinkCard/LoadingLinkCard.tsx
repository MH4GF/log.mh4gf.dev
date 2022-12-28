/* eslint-disable @next/next/no-img-element */
import type { ComponentPropsWithoutRef, FC } from 'react'
import { useId } from 'react'

import { SkeletonText } from '../SkeletonText'

import {
  linkStyle,
  containerStyle,
  titleStyle,
  descriptionStyle,
  imageStyle,
  linkCardStyle,
} from './LinkCard.css'

type Props = ComponentPropsWithoutRef<'section'>
export const LoadingLinkCard: FC<Props> = (props) => {
  const { className, ...sectionProps } = props
  const labelledBy = useId()

  return (
    <section
      {...sectionProps}
      aria-labelledby={labelledBy}
      className={`${linkCardStyle} ${className || ''}`}
    >
      <a className={linkStyle} href="" target="_blank" rel="noreferrer">
        <div className={containerStyle}>
          <h1 className={titleStyle} id={labelledBy}>
            <SkeletonText />
          </h1>
          <p className={descriptionStyle}>
            <SkeletonText />
          </p>
        </div>
        <img className={imageStyle} src="" alt="loading" />
      </a>
    </section>
  )
}
