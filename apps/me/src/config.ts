import type { SocialObjects } from './types'

export const SITE = {
  website: 'https://astro-paper.pages.dev/',
  author: 'Hirotaka Miyagi',
  desc: 'My portfolio site',
  title: 'mh4gf.dev',
  ogImage: 'og-image.jpeg',
  lightAndDarkMode: true,
  postPerPage: 3,
}

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
}

export const BLOG = 'https://log.mh4gf.dev'

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/mh4gf',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mh4gf',
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'h.miyagi.cnw@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
]
