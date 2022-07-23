import type { ComponentPropsWithoutRef, FC } from 'react'

import { heading1, heading2, heading3 } from './Heading.css'

export const Heading1: FC<ComponentPropsWithoutRef<'h1'>> = (props) => {
  const { children, className } = props
  return <h1 className={`${heading1} ${className || ''}`}>{children}</h1>
}

export const Heading2: FC<ComponentPropsWithoutRef<'h2'>> = (props) => {
  const { children, className } = props
  return <h2 className={`${heading2} ${className || ''}`}>{children}</h2>
}

export const Heading3: FC<ComponentPropsWithoutRef<'h3'>> = (props) => {
  const { children, className } = props
  return <h3 className={`${heading3} ${className || ''}`}>{children}</h3>
}
