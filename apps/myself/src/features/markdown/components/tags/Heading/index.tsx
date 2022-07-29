import type { ComponentPropsWithoutRef, FC } from 'react'
import { Heading1, Heading2, Heading3 } from 'ui'

import { heading1, heading2, heading3 } from './Heading.css'

export const H1: FC<ComponentPropsWithoutRef<'h1'>> = (props) => {
  const { children } = props

  return (
    <Heading1 className={heading1} {...props}>
      {children}
    </Heading1>
  )
}

export const H2: FC<ComponentPropsWithoutRef<'h2'>> = (props) => {
  const { children } = props

  return (
    <Heading2 className={heading2} {...props}>
      {children}
    </Heading2>
  )
}
export const H3: FC<ComponentPropsWithoutRef<'h3'>> = (props) => {
  const { children } = props

  return (
    <Heading3 className={heading3} {...props}>
      {children}
    </Heading3>
  )
}
