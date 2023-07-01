'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'cva'

type LinkProps = React.ComponentProps<typeof Link>

type NavLinkProps = Omit<LinkProps, 'aria-current'> & {
  ariaCurrent?: LinkProps['aria-current']
  activeClassName?: string
  inactiveClassName?: string
  block?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  ariaCurrent = 'page',
  block = false,
  className,
  activeClassName = '',
  inactiveClassName = '',
  ...rest
}) => {
  const segment = usePathname()
  const active = href !== '/' ? href === segment : !segment
  return (
    <Link
      {...rest}
      className={clsx(
        !block ? 'inline-block' : 'block',
        active && activeClassName,
        !active && inactiveClassName,
        className
      )}
      href={href}
      aria-current={active ? ariaCurrent : undefined}
    >
      {children}
    </Link>
  )
}

export default NavLink
