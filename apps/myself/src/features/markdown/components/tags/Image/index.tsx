import Image from 'next/image'
import type { ComponentPropsWithoutRef, FC } from 'react'
import React from 'react'

type Props = ComponentPropsWithoutRef<'img'>

const ImageComponent: FC<Props> = (props) => {
  const { src, alt } = props
  return <Image src={src || ''} alt={alt} width="500" height="500" />
}

export { ImageComponent as Image }
