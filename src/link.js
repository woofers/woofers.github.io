import NextLink from 'next/link'

const Link = ({ to, children, ...rest }) => (
  <NextLink href={to} {...rest}>
    <a>{children}</a>
  </NextLink>
)

export default Link
