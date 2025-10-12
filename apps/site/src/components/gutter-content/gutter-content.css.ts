import { style } from '@vanilla-extract/css'

const mainContainerWidthPx = 700
const minGutterWidthPx = 184

export const content = style({
  '@media': {
    [`(max-width: ${mainContainerWidthPx + minGutterWidthPx * 2}px)`]: {
      display: 'none'
    }
  }
})
