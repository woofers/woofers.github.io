import { breakpoints } from '@jaxson/ui/theme'
import { style } from '@vanilla-extract/css'

export const desktopImage = style({
  width: '52px',
  height: '52px',
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: '64px',
      height: '64px'
    }
  }
})
