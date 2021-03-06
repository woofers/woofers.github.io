import React from 'react'
import Link from './icon-link'
import { css } from '@emotion/react'
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
  if (type === 'github') return (<Align {...rest} icon={FaGithub}>View on GitHub</Align>)
  else if (type === 'game') return (<Align {...rest} icon={FaPlayCircle}>Play</Align>)
  else if (type === 'react') return (<Align {...rest} icon={FaPlayCircle}>View Demo</Align>)
  else if (type === 'resume') return (<Align {...rest} icon={FaScroll}>View Resume</Align>)
  else return (<Align {...rest} icon={FaPlayCircle}>View Site</Align>)
}

ProjectLink.defaultProps = {
  align: 'right'
}

export default ProjectLink
