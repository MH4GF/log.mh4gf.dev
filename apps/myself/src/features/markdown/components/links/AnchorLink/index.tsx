import type { ComponentPropsWithoutRef, FC } from 'react'

import { isLinkCard, LinkCard } from '../LinkCard'

import { anchorLink } from './AnchorLink.css'

type Props = ComponentPropsWithoutRef<'a'>

const LinkWithChildren: FC<Props> = ({ children, ...props }) => {
  return (
    <a className={anchorLink} {...props}>
      {children}
    </a>
  )
}

/**
 * @package
 */
export const AnchorLink: FC<Props> = (props) => {
  if (isLinkCard(props.href, props.children)) return <LinkCard {...props} />

  return <LinkWithChildren {...props} />
}
