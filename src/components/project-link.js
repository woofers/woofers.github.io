import { MarkdownLink } from 'link'
import { styled } from 'emotion'
import {
  EarthIcon,
  EyeIcon,
  GitHubText,
  GitHubIcon,
  Machobear,
  LivRent,
  Fts360,
  Fts,
} from 'logos'
import Tabs from './tabs'

const Button = styled(MarkdownLink)`
  text-decoration: none;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  border-radius: 8px;
  border: medium none;
  background: transparent none repeat scroll 0% 0%;
  padding: 10px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-right: 6px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    transform 0.1s ease 0s, transform 0.1s ease 0s;
  position: relative;
  outline: currentcolor none medium;
  color: #717171;
  cursor: pointer;
  &[aria-current='true'] {
    color: #222222;
  }
  &:hover {
    background: #f7f7f7 none repeat scroll 0% 0%;
  }
  &[aria-current='false']:focus {
    transform: scale(0.9) !important;
  }
`

const Align = p => {
  const { inline, align, children, color, ...rest } = p
  if (inline) return <Button {...rest}>{children}</Button>
  return (
    <Button {...rest} noStyle>
        {children}
    </Button>
  )
}

const ProjectLink = p => {
  const { type, children, ...rest } = p
  if (type === 'github')
    return (
      <Align color="#24292f" {...rest}>
        GitHub
      </Align>
    )
  else if (type === 'game')
    return (
      <Align color="#fe9c55" {...rest}>
        Play
      </Align>
    )
  else if (type === 'react')
    return (
      <Align color="#fe9c55" {...rest}>
        View Demo
      </Align>
    )
  else if (type === 'resume')
    return (
      <Align color="#fe9c55" {...rest}>
        View Resume
      </Align>
    )
  else
    return (
      <Align color="#fe9c55" {...rest}>
        View Site
      </Align>
    )
}

ProjectLink.defaultProps = {
  align: 'right',
}

export default ProjectLink
