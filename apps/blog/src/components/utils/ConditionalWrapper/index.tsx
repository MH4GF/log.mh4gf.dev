import type { FC, ReactElement, ReactNode } from 'react'

interface Props {
  cond: boolean
  node: (children: ReactNode) => ReactElement
  children: ReactNode
}

export const ConditionalWrapper: FC<Props> = ({ cond, node, children }) => {
  return <>{cond ? node(children) : children}</>
}
