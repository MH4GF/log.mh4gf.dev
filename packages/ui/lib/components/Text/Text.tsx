import classNames from 'classnames'
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { paragraphStyle } from './Text.css'

type Props = ComponentPropsWithoutRef<'p'> & {
  children: ReactNode
}

export const Text: FC<Props> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={classNames(paragraphStyle, className)}>
      {children}
    </p>
  )
}
