import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { LinkCard as LinkCardComponent } from 'ui'

import { useOGP } from '../../../features/link'

export const isLinkCard = (href: string | undefined, children: ReactNode): boolean => {
  return Array.isArray(children) && children.length === 1 && children[0] === href
}

type Props = ComponentPropsWithoutRef<'a'>
export const LinkCard: FC<Props> = (props) => {
  const { url, title, description, imageSrc } = useOGP(props.href || '')
  return <LinkCardComponent url={url} title={title} description={description} imageSrc={imageSrc} />
}
