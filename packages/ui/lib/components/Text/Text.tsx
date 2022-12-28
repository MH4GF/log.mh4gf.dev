import classNames from 'classnames'
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { paragraphStyle } from './Text.css'

type As = 'p' | 'span'
type Props<T extends As = As> = ComponentPropsWithoutRef<T> & {
  as?: T
  children: ReactNode
}

export const Text: FC<Props> = ({ as, children, className, ...props }) => {
  const Component = as || 'p'

  return (
    <Component {...props} className={classNames(paragraphStyle, className)}>
      {children}
    </Component>
  )
}
