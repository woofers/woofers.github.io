import React from 'react'
import { css } from '@emotion/core'
import Link from './smart-link'
import { withTheme } from 'emotion-theming'

const style = theme => css`
  text-align: right;
  margin-bottom: ${theme.margins.extraSmall};
`

const Container = p => p.inline ? (<span css={style}>{p.children}</span>) : (<div css={style}>{p.children}</div>)

const PageLink = p => (
  <Container inline={p.inline}>
    <Link style={p.style} to={p.href}>{p.children}</Link>
  </Container>
)

export default withTheme(PageLink)
