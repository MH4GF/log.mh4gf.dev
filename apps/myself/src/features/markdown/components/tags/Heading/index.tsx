import type { ComponentPropsWithoutRef, FC } from 'react'
import { Heading1 } from 'ui'

type Props = ComponentPropsWithoutRef<'h1'>

export const H1: FC<Props> = (props) => {
  return <Heading1>{props.children}</Heading1>
}
