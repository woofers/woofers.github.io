import { globalStyle, style } from '@vanilla-extract/css'

export const linkBlock = style({
  selectors: {
    '&[data-shift="true"]': {
      paddingTop: '0'
    }
  }
})

export const gutter = style({})

globalStyle(`${gutter}:has([data-shift="true"])`, {
  top: 22
})
