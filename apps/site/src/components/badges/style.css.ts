import { breakpoints } from '@jaxson/ui/theme'
import { style } from '@vanilla-extract/css'

export const downloadIcon = style({
  width: '15px',
  height: '15px',
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: '16px',
      height: '16px'
    }
  }
})

export const starIcon = style({
  width: '14px',
  height: '14px',
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: '16px',
      height: '16px'
    }
  }
})
