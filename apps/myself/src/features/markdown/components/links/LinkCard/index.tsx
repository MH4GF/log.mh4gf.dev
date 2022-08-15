import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { LinkCard as LinkCardComponent } from 'ui'

export const isLinkCard = (href: string | undefined, children: ReactNode): boolean => {
  return Array.isArray(children) && children.length === 1 && children[0] === href
}

type Props = ComponentPropsWithoutRef<'a'>
export const LinkCard: FC<Props> = (props) => {
  const { href } = props
  return <LinkCardComponent url={href} title={href} />
}
