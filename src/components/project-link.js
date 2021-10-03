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

const Wrapper = styled.div`
  text-align: ${props => props.align};
  margin-bottom: 12px;
`

const Badge = styled.div`
  letter-spacing: 0.30px;
  height: 48px;
  line-height: 18.5px;
  font-size: 21px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${props => props.$color};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  > svg:first-of-type {
    width: 35px;
    height: 24px;
  }
  > svg:nth-of-type(2) {
    width: 73px;
    height: 21.5px;
    transform: scale(0.9);
  }
  font-family: 'Mulish',sans-serif;
  color: #fff;
  font-weight: 900;
`

const Align = p => {
  const { inline, align, children, color, ...rest } = p
  if (inline) return <MarkdownLink {...rest}>{children}</MarkdownLink>
  return (
    <MarkdownLink {...rest} noStyle>
      <Badge align={p.align} $color={color}>
        {children}
      </Badge>
    </MarkdownLink>
  )
}

const ProjectLink = p => {
  const { type, children, ...rest } = p
  if (type === 'github') return <Align color="#24292f" {...rest}>        <GitHubIcon />
        <GitHubText /></Align>
  else if (type === 'game') return <Align color="#fe9c55" {...rest}>Play</Align>
  else if (type === 'react') return <Align color="#fe9c55" {...rest}>View Demo</Align>
  else if (type === 'resume') return <Align color="#fe9c55" {...rest}>View Resume</Align>
  else return <Align color="#fe9c55" {...rest}>View Site</Align>
}

ProjectLink.defaultProps = {
  align: 'right',
}

export default ProjectLink
