import NextLink from 'next/link'
import { styled, Link as StyledAnchor } from 'ruffsponsive'

const Anchor = styled('a', {
  textDecoration: 'none',
})

const Link = ({ href, as, children, scroll = false, shallow, ...rest }) => (
  <NextLink href={href} as={as} scroll={scroll} shallow={shallow} passHref>
    <Anchor {...rest}>{children}</Anchor>
  </NextLink>
)

export default Link

export const SectionLink = ({ href, as, ...rest }) => (
  <Link href="/[[...section]]?reset=true" as={href} {...rest} />
)

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
      {noStyle ? (
        <Anchor {...rest}>{children}</Anchor>
      ) : (
        <StyledAnchor {...rest}>{children}</StyledAnchor>
      )}
    </NextLink>
  )
}
