import { style } from '@vanilla-extract/css'

import { typograph } from '~/lib/themes/typography.css'

export const linkCardStyle = style({
  width: '100%',
  height: '6rem',
  borderRadius: '0.25rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  ':hover': {
    cursor: 'pointer',
  },
})

export const linkStyle = style({
  height: '100%',
  display: 'grid',
  gridTemplate: `
  "container image" 100% / auto 25%
  `,
})

export const containerStyle = style({
  gridArea: 'container',
  overflow: 'hidden',
  padding: '0.5rem',
})

export const titleStyle = style([
  typograph.base,
  {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
])

export const descriptionStyle = style([
  typograph.small,
  {
    overflow: 'hidden',
    height: '2rem',
  },
])

export const imageStyle = style({
  gridArea: 'image',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
