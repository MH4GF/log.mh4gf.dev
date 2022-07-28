import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    bg: '#1B1A17',
    text: '#fff',
  },
})
