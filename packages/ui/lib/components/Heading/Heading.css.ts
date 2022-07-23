import { style } from '@vanilla-extract/css'

import { overTablet } from '~/lib/functions/overTablet'

export const heading1 = style({
  ...overTablet({
    fontSize: '1.5rem',
    lineHeight: '2rem',
  }),
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 'bold',
  marginTop: '1.25rem',
})

export const heading2 = style({
  ...overTablet({
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  }),
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 'bold',
  marginTop: '1rem',
})

export const heading3 = style({
  ...overTablet({
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  }),
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: 'bold',
  marginTop: '0.75rem',
})
