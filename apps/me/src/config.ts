import type { SocialObjects } from './types'

export const SITE = {
  website: 'https://astro-paper.pages.dev/',
  author: 'Sat Naing',
  desc: 'A minimal, responsive and SEO-friendly Astro blog theme.',
  title: 'mh4gf.dev',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
}

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
}

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
