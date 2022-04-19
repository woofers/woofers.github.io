import { MarkdownLink } from 'link'
import { styled, Typography } from 'ruffsponsive'

const Button = styled(MarkdownLink, {
  textDecoration: 'none',
  fontSize: '15px',
  lineHeight: '18px',
  fontWeight: 700,
  borderRadius: '8px',
  border: 'medium none',
  background: 'transparent none repeat scroll 0% 0%',
  padding: '10px',
  marginTop: '6px',
  marginBottom: '6px',
  marginRight: '6px',
  transition:
    'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, transform 0.1s ease 0s',
  position: 'relative',
  outline: 'currentcolor none medium',
  color: '#717171',
  cursor: 'pointer',
  "&[aria-current='true']": { color: '#222222' },
  '&:hover': { background: '#f7f7f7 none repeat scroll 0% 0%' },
  "&[aria-current='false']:focus": { transform: 'scale(0.9) !important' },
})

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
        <Typography noMargin as="span" type="button">
          GitHub
        </Typography>
      </Align>
    )
  else if (type === 'game')
    return (
      <Align color="#fe9c55" {...rest}>
        <Typography noMargin as="span" type="button">
          Play
        </Typography>
      </Align>
    )
  else if (type === 'react')
    return (
      <Align color="#fe9c55" {...rest}>
        <Typography noMargin as="span" type="button">
          View Demo
        </Typography>
      </Align>
    )
  else if (type === 'resume')
    return (
      <Align color="#fe9c55" {...rest}>
        <Typography noMargin as="span" type="button">
          View Resume
        </Typography>
      </Align>
    )
  else
    return (
      <Align color="#fe9c55" {...rest}>
        <Typography noMargin as="span" type="button">
          View Site
        </Typography>
      </Align>
    )
}

ProjectLink.defaultProps = {
  align: 'right',
}

export default ProjectLink
