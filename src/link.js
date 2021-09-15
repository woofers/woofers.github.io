import NextLink from 'next/link'
import { styled } from 'emotion'

const Anchor = styled.a`
  text-decoration: none;
`

const Link = ({ to, children, scroll = false, ...rest }) => (
  <NextLink href={to} scroll={scroll} passHref>
    <Anchor {...rest}>{children}</Anchor>
  </NextLink>
)

export default Link
