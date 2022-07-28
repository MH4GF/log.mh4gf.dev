import { globalStyle } from '@vanilla-extract/css'

import { theme } from './theme.css'

globalStyle('body', {
  backgroundColor: theme.color.bg,
  fontFamily:
    'Inter,Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;',
  color: theme.color.text,
  lineHeight: 2,
})
