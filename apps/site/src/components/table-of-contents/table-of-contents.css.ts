import { vars } from '@jaxson/ui/theme'
import { globalStyle, style } from '@vanilla-extract/css'

export const container = style({})

export const linkItem = style({
  paddingTop: '6px',
  paddingBottom: '6px'
})

export const line = style({
  background: vars.colors.tableOfConentsLine
})

globalStyle(`${container} > ${linkItem}:first-child`, {
  paddingTop: 0
})

globalStyle(`${container} > ${linkItem}:last-child`, {
  paddingBottom: 0
})
