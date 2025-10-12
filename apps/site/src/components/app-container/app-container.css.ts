import { vars } from '@jaxson/ui/theme'
import { style } from '@vanilla-extract/css'

export const container = style({
  background: vars.colors.background,
  color: vars.colors.primary,
  minHeight: '100vh',
  '@supports': {
    '(min-height: 100svh)': {
      minHeight: '100svh'
    }
  }
})
