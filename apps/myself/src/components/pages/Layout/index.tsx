import type { ReactElement, ReactNode } from 'react'

import { layout } from './Layout.css'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title }: Props): ReactElement => {
  return (
    <div className={layout}>
      <title>{title ?? 'mh4gf.dev'}</title>
      {children}
    </div>
  )
}
