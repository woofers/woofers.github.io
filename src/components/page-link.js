import React from 'react'
import { css } from '@emotion/core'
import Link from './smart-link'

const style = css`
  text-align: right;
`

const Container = p => p.inline ? (<span css={style}>{p.children}</span>) : (<div css={style}>{p.children}</div>)

const PageLink = p => (
  <Container inline={p.inline}>
    <Link style={p.style} to={p.href}>{p.children}</Link>
  </Container>
)

export default PageLink
