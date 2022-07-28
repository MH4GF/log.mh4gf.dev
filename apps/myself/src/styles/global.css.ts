import { globalStyle } from '@vanilla-extract/css'

import { theme } from './theme.css'

globalStyle('body', {
  backgroundColor: theme.color.bg,
})
