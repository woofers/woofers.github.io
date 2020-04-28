import React from 'react'
import { FadeLink as Link } from './link'
import { css } from '@emotion/core'

const Align = p => {
  const { inline, align, children, ...rest } = p
  const style = css`
    text-align: ${align};
  `
  if (inline) return <Link {...rest}>{children}</Link>
  return (
    <div css={style}>
      <Link {...rest}>{children}</Link>
    </div>
  )
}

const ProjectLink = p => {
  const { type, children, ...rest } = p
  if (type === 'github') return (<Align {...rest}>View on GitHub</Align>)
  else if (type === 'game') return (<Align {...rest}>Play</Align>)
  else if (type === 'react') return (<Align {...rest}>View Demo</Align>)
  else if (type === 'resume') return (<Align {...rest}>View Resume</Align>)
  else return (<Align {...rest}>View Site</Align>)
}

ProjectLink.defaultProps = {
  align: 'right'
}

export default ProjectLink
