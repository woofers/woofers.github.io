import { vars } from '@jaxson/ui/theme'
import { style } from '@vanilla-extract/css'

export const projectItem = style({
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.brownHighlight,
      transition: 'background-color 0.4s ease-in-out'
    }
  }
})
