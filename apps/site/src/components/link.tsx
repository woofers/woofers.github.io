import NextLink from 'next/link'

const host = 'https://jaxs.onl'
const path = '/projects/'
// const hostRegex = new RegExp(`^${host}${path}`)

type AnchorProps = React.HTMLProps<HTMLAnchorElement>

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, 'href'> & {
  href?: string
}

type Props = AnchorProps | LinkProps

const isTargetSelf = (target?: string) => !target || target === '_self'

const isHash = (props: Props): props is AnchorProps =>
  (props.href ?? '#').startsWith('#')

const isNavLink = (props: Props): props is LinkProps =>
  !!props.href &&
  isTargetSelf(props.target) &&
  (props.href.startsWith('/') || props.href.startsWith(`${host}${path}`))

const Link: React.FC<Props> = props => {
  if (isNavLink(props)) {
    const { href, children, className, ...rest } = props
    const adjusted = (href ?? '').replace(
      /^https:\/\/jaxs.onl\/projects\//,
      path
    )
    return (
      <NextLink href={adjusted} className={className} {...rest}>
        {children}
      </NextLink>
    )
  }

  if (isHash(props)) {
    const { href, className, ...rest } = props
    return <a href={href ?? '#'} className={className} {...rest} />
  }

  const {
    href,
    children,
    target = '_blank',
    className,
    ...rest
  } = props as AnchorProps
  return (
    <a
      href={href}
      target={target ?? '_blank'}
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
