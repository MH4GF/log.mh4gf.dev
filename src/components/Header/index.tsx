import Link from 'next/link'

import { pagesPath } from '~/src/generated/$path'

export const Header = () => {
  return (
    <header>
      <Link href={pagesPath.$url()}>log.mh4gf.dev</Link>
    </header>
  )
}
