import NextLink from 'next/link'
import { styled } from 'emotion'

const Anchor = styled.a`
  text-decoration: none;
`

const Link = ({ href, as, children, scroll = false, shallow, ...rest }) => (
  <NextLink href={href} as={as} scroll={scroll} shallow={shallow} passHref>
    <Anchor {...rest}>{children}</Anchor>
  </NextLink>
)

export default Link

export const SectionLink = ({ href, as, ...rest }) => (
  <Link href="/[[...section]]?reset=true" as={href} {...rest} />
)
