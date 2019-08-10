import React from 'react'
import { css } from '@emotion/core'
import Link from './smart-link'
import { withTheme } from 'emotion-theming'

const Container = p => {
  const style = theme => css`
    text-align: ${p.align};
    display: ${p.inline ? 'inline-block' : 'block'};
    margin-bottom: ${theme.margins.extraSmall};
    margin-right: ${p.inline ? theme.margins.large : 0};
    margin-top: ${p.inline ? theme.margins.medium : 0};
  `
  if (p.inline) return (<span css={style}>{p.children}</span>)
  return (<div css={style}>{p.children}</div>)
}

const Button = p => (
  <Container inline={p.inline} align={p.align}>
    <Link style={p.style} to={p.href}>{p.children}</Link>
  </Container>
)

Button.defaultProps = {
  align: 'right'
}

export default withTheme(Button)
