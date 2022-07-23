import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { heading1 } from './Heading.css'

type Props = ComponentPropsWithoutRef<'h1'> & {
  children: ReactNode
}
export const Heading1: FC<Props> = (props) => {
  return <h1 className={heading1}>{props.children}</h1>
}
