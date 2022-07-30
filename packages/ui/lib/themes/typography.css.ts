import { createGlobalTheme } from '@vanilla-extract/css'

export const typograph = createGlobalTheme(':root', {
  base: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
})
