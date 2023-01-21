import NextLink from 'next/link'
import { styled } from 'jxsn'

const StyledAnchor = styled('a', {
  color: '#6a7eff',
  transition: 'color 300ms ease 0s',
  textDecoration: 'none',
  '&:hover': {
    color: '#4461ce'
  }
})

const Anchor = styled('a', {
  textDecoration: 'none'
})

const Link = ({ href, as, children, scroll = false, shallow, ...rest }) => (
  <NextLink href={href} as={as} scroll={scroll} shallow={shallow} passHref legacyBehavior>
    <Anchor {...rest}>{children}</Anchor>
  </NextLink>
)

export default Link

export const MarkdownLink = ({ href, noStyle, children, target, ...rest }) => {
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
    <NextLink href={path} passHref legacyBehavior>
      {noStyle ? (
        <Anchor target={target} {...rest}>
          {children}
        </Anchor>
      ) : (
        <StyledAnchor target={target} {...rest}>
          {children}
        </StyledAnchor>
      )}
    </NextLink>
  )
}
