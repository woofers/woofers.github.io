import NextLink from 'next/link'
import { Link as StyledAnchor } from 'ruffsponsive'
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

const BubbleLink = styled(Link)`
  ${props =>
    props.$enable &&
    `
    padding: 4px 8px;
    background: #fe9f5a;
    border-radius: 7px;
    border: 25px;
    margin: 2px 2px;
    font-weight: 900;
    color: #fff;
 `};
`

export const MarkdownLink = ({ href, noStyle, children, ...rest }) => {
  const siteUrl = 'https://jaxs.onl'
  const urlNoHttps = siteUrl.replace('https://', '')
  const urlHttp = siteUrl.replace('https://', 'http://')
  const plain = new RegExp(`^${urlNoHttps}`)
  const route = href
    .replace(siteUrl, '')
    .replace(urlHttp, '')
    .replace(plain, '')
  const path = route ?? '/'
  return (
    <NextLink href={path} passHref>
      {noStyle ? <Anchor {...rest}>{children}</Anchor> : <StyledAnchor {...rest}>{children}</StyledAnchor>}
    </NextLink>
  )
}
