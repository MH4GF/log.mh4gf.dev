import type { FC, ComponentPropsWithoutRef } from 'react'

import { unorderedList } from './UnorderedList.css'

export const UnorderedList: FC<ComponentPropsWithoutRef<'ul'>> = (props) => {
  const { children, className } = props
  return (
    <ul className={`${unorderedList} ${className || ''}`} {...props}>
      {children}
    </ul>
  )
}
