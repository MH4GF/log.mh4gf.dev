import { style } from '@vanilla-extract/css'

export const anchorLink = style({
  opacity: 0.8,
  transition: '0.2s',
  ':hover': {
    opacity: 1,
    textDecoration: 'underline #F0A500 2px',
    textUnderlineOffset: '4px',
  },
})
