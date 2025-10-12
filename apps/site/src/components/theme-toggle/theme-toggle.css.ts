import { breakpoints } from '@jaxson/ui/theme'
import { style } from '@vanilla-extract/css'

export const responsiveIcons = style({
  width: '16px',
  height: '16px',
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: '20px',
      height: '20px'
    }
  }
})
