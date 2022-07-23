import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

type Props = ComponentPropsWithoutRef<'h1'> & {
  children: ReactNode
}
export const Heading1: FC<Props> = (props) => {
  return <h1>{props.children}</h1>
}
