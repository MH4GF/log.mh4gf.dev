import type { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title }: Props): ReactElement => {
  return (
    <div>
      <title>{title || 'mh4gf.dev'}</title>
      {children}
    </div>
  )
}
