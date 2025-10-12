import { globalStyle, style } from '@vanilla-extract/css'
import { breakpoints, vars } from './theme.css'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`
const em = (px: number, base: number) => `${round(px / base)}em`

export const prose = style({
  fontSize: rem(12),
  lineHeight: round(22 / 14),
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: rem(15)
    }
  }
})

globalStyle(`${prose} p, ${prose} li`, {
  color: vars.colors.textPrimary
})

globalStyle(`${prose} strong`, {
  color: vars.colors.primary
})

globalStyle(`${prose} a`, {
  color: vars.colors.externalLink
})

globalStyle(`${prose} p`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14)
})

globalStyle(`${prose} blockquote`, {
  marginTop: em(24, 18),
  marginBottom: em(24, 18),
  paddingInlineStart: em(20, 18)
})

globalStyle(`${prose} h1`, {
  fontSize: em(30, 14),
  marginTop: '0',
  marginBottom: em(24, 30),
  lineHeight: round(36 / 30)
})

globalStyle(`${prose} h2`, {
  fontSize: em(20, 14),
  marginTop: em(32, 20),
  marginBottom: em(16, 20),
  lineHeight: round(28 / 20)
})

globalStyle(`${prose} h3`, {
  fontSize: em(18, 14),
  marginTop: em(20, 18),
  marginBottom: em(8, 18),
  lineHeight: round(28 / 18)
})

globalStyle(`${prose} h4`, {
  marginTop: em(12, 14),
  marginBottom: em(8, 14),
  lineHeight: round(20 / 14)
})

globalStyle(`${prose} code`, {
  fontSize: em(12, 14)
})

globalStyle(`${prose} h2 code`, {
  fontSize: em(18, 20)
})

globalStyle(`${prose} h3 code`, {
  fontSize: em(16, 18)
})

globalStyle(`${prose} pre`, {
  fontSize: em(13, 14),
  marginTop: em(20, 12),
  marginBottom: em(20, 12),
  borderRadius: rem(4),
  paddingTop: em(8, 12),
  paddingInlineEnd: em(12, 12),
  paddingBottom: em(8, 12),
  paddingInlineStart: em(12, 12)
})

globalStyle(`${prose} ol`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14),
  paddingInlineStart: em(22, 14)
})

globalStyle(`${prose} ul`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14),
  paddingInlineStart: em(22, 14)
})

globalStyle(`${prose} li`, {
  marginTop: em(4, 14),
  marginBottom: em(4, 14)
})

globalStyle(`${prose} ol > li`, {
  paddingInlineStart: em(6, 14)
})

globalStyle(`${prose} ul > li`, {
  paddingInlineStart: em(6, 14)
})

globalStyle(`${prose} ul > li`, {
  paddingInlineStart: em(6, 14)
})

globalStyle(`${prose} > ul > li p`, {
  marginTop: em(8, 14),
  marginBottom: em(8, 14)
})

globalStyle(`${prose} > ul > li > p:first-child`, {
  marginTop: em(16, 14)
})

globalStyle(`${prose} > ul > li > p:last-child`, {
  marginBottom: em(16, 14)
})

globalStyle(`${prose} > ol > li > p:first-child`, {
  marginTop: em(16, 14)
})

globalStyle(`${prose} > ol > li > p:last-child`, {
  marginBottom: em(16, 14)
})

globalStyle(`${prose} ul ul, ul ol, ol ul, ol ol`, {
  marginTop: em(8, 14),
  marginBottom: em(8, 14)
})

globalStyle(`${prose} hr + *`, {
  marginTop: '0'
})

globalStyle(`${prose} h2 + *`, {
  marginTop: '0'
})

globalStyle(`${prose} h3 + *`, {
  marginTop: '0'
})

globalStyle(`${prose} h4 + *`, {
  marginTop: '0'
})

globalStyle(`${prose} > :first-child`, {
  marginTop: '0'
})

globalStyle(`${prose} > :last-child`, {
  marginBottom: '0'
})
