import { MarkdownLink } from 'link'
import { styled } from 'emotion'

const Wrapper = styled.div`
  text-align: ${props => props.align};
  margin-bottom: 12px;
`

const Align = p => {
  const { inline, align, children, ...rest } = p
  if (inline) return <MarkdownLink {...rest}>{children}</MarkdownLink>
  return (
    <Wrapper align={p.align}>
      <MarkdownLink {...rest}>{children}</MarkdownLink>
    </Wrapper>
  )
}

const ProjectLink = p => {
  const { type, children, ...rest } = p
  if (type === 'github') return <Align {...rest}>View on GitHub</Align>
  else if (type === 'game') return <Align {...rest}>Play</Align>
  else if (type === 'react') return <Align {...rest}>View Demo</Align>
  else if (type === 'resume') return <Align {...rest}>View Resume</Align>
  else return <Align {...rest}>View Site</Align>
}

ProjectLink.defaultProps = {
  align: 'right',
}

export default ProjectLink
