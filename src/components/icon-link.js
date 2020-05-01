import React from 'react'
import IconBox from './icon-box'
import { FadeLink } from './link'
import { css } from '@emotion/core'

const style = css`
  margin-bottom: 7px;
`

const withNewline = inline => element => {
  if (inline) return element
  return <div css={style}>{element}</div>
}

const IconLink = p => {
  const { children, icon, inline, link: Link, ...rest } = p
  return withNewline(inline)(
    <Link {...rest}>
      <IconBox icon={icon} right="5px" top="3px">
        {children}
      </IconBox>
    </Link>
  )
}

IconLink.defaultProps = {
  link: FadeLink,
  inline: true
}

export default IconLink
