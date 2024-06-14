import { Link as NextLink } from 'next-view-transitions'
import { clsx } from 'cva'
import { toUrl } from 'utils'

type StyleProps = { theme?: 'plain' | 'underline' }

type AnchorProps = React.HTMLProps<HTMLAnchorElement> & StyleProps

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, 'href'> & {
  href?: string
} & StyleProps

type Props = AnchorProps | LinkProps

const isTargetSelf = (target?: string) => !target || target === '_self'

const isHash = (props: Props): props is AnchorProps =>
  (props.href ?? '#').startsWith('#')

const isNavLink = (props: Props): props is LinkProps =>
  !!props.href &&
  isTargetSelf(props.target) &&
  (props.href.startsWith('/') ||
    props.href.startsWith('https://jaxs.onl/projects/'))

const getClassName = (theme: StyleProps['theme'], className?: string) =>
  clsx(
    (theme ?? 'underline') === 'underline' &&
      'text-zinc-500 dark-mode:text-neutral-500 underline [text-underline-offset:5px] decoration-transparent decoration-wavy transition-[text-decoration-color] hover:decoration-zinc-500/10 dark-mode:hover:decoration-neutral-500/25',
    className
  )

const Link: React.FC<Props> = props => {
  if (isNavLink(props)) {
    const { href, children, theme, className, ...rest } = props
    const adjusted = (href ?? '').replace(
      /^https:\/\/jaxs.onl\/projects\//,
      '/projects/'
    )
    return (
      <NextLink
        href={toUrl(adjusted)}
        className={getClassName(theme, className)}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }

  if (isHash(props)) {
    const { href, theme, className, ...rest } = props
    return (
      <a
        href={href ?? '#'}
        className={getClassName(theme, className)}
        {...rest}
      />
    )
  }

  const {
    href,
    children,
    target = '_blank',
    theme,
    className,
    ...rest
  } = props as AnchorProps
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={getClassName(theme, className)}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
