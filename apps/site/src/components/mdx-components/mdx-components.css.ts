import { vars } from '@jaxson/ui/theme'
import { globalStyle, style } from '@vanilla-extract/css'

export const video = style({})

globalStyle(`${video} + ${video}`, {
  marginLeft: vars.space[400]
})

globalStyle(`pre > code:not(.shiki)`, {
  backgroundColor: 'unset',
  border: 'none',
  borderRadius: 'unset'
})

globalStyle('pre.shiki[class]', {
  lineHeight: 'inherit',
  backgroundColor: `${vars.colors.codeBackground} !important`
})

globalStyle('pre.shiki[class] span', {
  backgroundColor: 'unset !important'
})

export const heading = style({
  fontFamily: vars.font.mono,
  letterSpacing: '-0.07px',
  position: 'relative'
})

globalStyle(`${heading}:after`, {
  pointerEvents: 'none',
  content: ' ',
  position: 'absolute',
  bottom: '-4px',
  left: 0,
  right: 0,
  width: '100%',
  height: '1px',
  backgroundColor: vars.colors.divider,
  overflowX: 'hidden'
})

globalStyle(`.${heading}:has(+ .${heading})`, {
  fontSize: '0.8571429em',
  color: '#aaa5a5',
  fontWeight: '300',
  marginBottom: vars.space[400]
})

globalStyle(`.${heading}:has(+ .${heading}):after`, {
  content: 'none'
})

export const hideFirstLine = style({})

globalStyle(`.${hideFirstLine} > *:first-child`, {
  display: 'none'
})

export const hideSecondLine = style({})

globalStyle(`.${hideSecondLine} > *:nth-child(2)`, {
  display: 'none'
})

export const gutterWrapperClassName = style({
  display: 'none',
  '@media': {
    [`(min-width: 1280px)`]: {
      display: 'flex'
    }
  }
})
