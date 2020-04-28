import React from 'react'
import { FadeLink as Link } from './link'
import { css } from '@emotion/core'
import { FaGithub, FaPlayCircle, FaScroll } from 'react-icons/fa'

const Align = p => {
  const { inline, align, children, ...rest } = p
  const style = css`
    text-align: ${align};
    margin-bottom: 12px;
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
  if (type === 'github') return (<Align {...rest}><FaGithub /> View on GitHub</Align>)
  else if (type === 'game') return (<Align {...rest}><FaPlayCircle /> Play</Align>)
  else if (type === 'react') return (<Align {...rest}><FaPlayCircle /> View Demo</Align>)
  else if (type === 'resume') return (<Align {...rest}><FaScroll /> View Resume</Align>)
  else return (<Align {...rest}><FaPlayCircle /> View Site</Align>)
}

ProjectLink.defaultProps = {
  align: 'right'
}

export default ProjectLink
