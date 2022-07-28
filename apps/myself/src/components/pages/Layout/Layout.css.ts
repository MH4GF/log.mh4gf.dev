import { style } from '@vanilla-extract/css'

import { theme } from '~/src/styles/theme.css'

export const layout = style({
  backgroundColor: theme.color.bg,
  minHeight: '100vh',
})
