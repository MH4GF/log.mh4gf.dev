import { createGlobalTheme } from '@vanilla-extract/css'

export const typograph = createGlobalTheme(':root', {
  base: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  small: {
    fontSize: '0.75rem',
    lineHeight: '1.5',
  },
})
