import { styled } from 'ruffsponsive'

const Element = styled('div', {})

const Content = ({ html, as = 'div', ...rest }) => (
  <Element {...rest} as={as} dangerouslySetInnerHTML={{ __html: html }} />
)

export default Content
