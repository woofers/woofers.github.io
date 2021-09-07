import NextLink from 'next/link'
import { styled } from 'emotion'

const Anchor = styled.a`
  text-underline: none;
`

const Link = ({ to, children, ...rest }) => (
  <NextLink href={to} passHref>
    <Anchor {...rest}>{children}</Anchor>
  </NextLink>
)

export default Link
