import Image from 'next/image'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { externalLinks } from '~/src/utils/externalLinks'

export const Footer: FC<ComponentPropsWithoutRef<'footer'>> = (props) => {
  return (
    <footer {...props}>
      <section className="text-center">
        <a href={externalLinks.about} className="hover:underline">
          <Image
            src={externalLinks.avatar}
            alt="My profile image"
            width="150px"
            height="150px"
            className="rounded-full"
          />
          <h1 className="mt-2 font-bold">Hirotaka Miyagi</h1>
          <p className="text-sm text-slate-400">Software Engineer / @mh4gf</p>
        </a>
      </section>
    </footer>
  )
}
