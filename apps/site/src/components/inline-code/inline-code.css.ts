import { vars } from '@jaxson/ui/theme'
import { globalStyle } from '@vanilla-extract/css'

export const code = 'code'

globalStyle(`.${code}`, {
  color: vars.colors.textPrimary,
  fontFamily: vars.font.mono,
  fontSize: '0.8571429em',
  backgroundColor: vars.colors.codeBackground,
  border: `1px solid ${vars.colors.codeBorder}`,
  padding: vars.space['050'],
  borderRadius: '5px'
})
