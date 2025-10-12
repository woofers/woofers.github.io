import { breakpoints, vars } from '@jaxson/ui/theme'
import { style } from '@vanilla-extract/css'

const contentWidthPx = 700

export const contentPadding = style({
  padding: `0 ${vars.space[400]}`,
  '@media': {
    [`(min-width: ${breakpoints.tablet}px)`]: {
      padding: 0
    }
  }
})

export const content = style({
  flex: '1 0 auto',
  '@media': {
    [`(max-width: ${contentWidthPx}px)`]: {
      flex: '1 1 auto'
    }
  }
})

export const inner = style({
  width: '100%',
  maxWidth: `${contentWidthPx}px`,
  margin: '0 auto'
})
