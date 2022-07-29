import type { ComponentPropsWithoutRef, FC } from 'react'

import { anchorLink } from './AnchorLink.css'

type Props = ComponentPropsWithoutRef<'a'>

/**
 * @package
 */
export const AnchorLink: FC<Props> = (props) => {
  const { children } = props
  return (
    <a className={anchorLink} {...props}>
      {children}
    </a>
  )
}
