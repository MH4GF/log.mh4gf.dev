import { style } from '@vanilla-extract/css'

import { typograph } from '~/lib/themes/typography.css'

export const linkCardStyle = style({
  width: '100%',
  height: '6rem',
  borderRadius: '0.25rem',
  border: '1px solid #eaeaea',
})

export const linkStyle = style({
  height: '100%',
  display: 'grid',
  gridTemplate: `
  "title       image" 0fr
  "description image" 1fr / 1fr 25%
  `,
})

export const titleStyle = style([
  typograph.base,
  {
    gridArea: 'title',
    fontWeight: 'bold',
  },
])

export const descriptionStyle = style([
  typograph.base,
  {
    gridArea: 'description',
  },
])

export const imageStyle = style({
  gridArea: 'image',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
