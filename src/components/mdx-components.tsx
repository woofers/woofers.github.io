import React, { useMemo } from 'react'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { toUrl } from 'utils'
import { Text as Typography, Link } from 'components/styled'
import { clsx } from 'cva'

type InsetProps = { inset?: 'both' | 'left' | 'right' | 'none' }

type ImageProps = React.HTMLProps<HTMLImageElement> & InsetProps

const CustomImage: React.FC<ImageProps & { project: string } & InsetProps> = ({
  project,
  src: initialSrc = '',
  title,
  alt: initialAlt,
  className,
  inset = 'both',
  ...rest
}) => {
  if (!initialSrc) {
    return null
  }
  const src =
    initialSrc.startsWith('./') || initialSrc.startsWith('/')
      ? initialSrc.replace(
          /^(\.)?\//,
          `https://raw.githubusercontent.com/woofers/${project}/main/`
        )
      : initialSrc
  const meta =
    initialAlt === 'img' ? { alt: title } : { alt: initialAlt, title }
  return (
    <img
      className={clsx(
        'rounded-lg mt-2 mb-4',
        inset === 'both' && 'mx-auto',
        inset === 'left' && 'ml-auto',
        inset === 'right' && 'mr-auto',
        className
      )}
      src={src}
      {...meta}
      {...rest}
    />
  )
}

const withCustomImage = (project: string) => {
  const Component: React.FC<ImageProps> = props => (
    <CustomImage project={project} {...props} />
  )
  return Component
}

type TextProps = React.ComponentProps<typeof Typography>

type LinkProps = React.ComponentProps<typeof Link>

const videoTypes = ['mov', 'mp4', 'mpeg']
const prefix = '\\.'
const videoType = new RegExp(
  `(${prefix}${videoTypes.reduce((a, b) => `${a}|${prefix}${b}`)})$`
)

const Anchor: React.FC<LinkProps> = ({ href, ...rest }) => {
  if (videoType.test(href ?? '')) {
    return (
      <video
        src={href}
        controls
        data-video={true}
        muted
        className="peer inline-flex w-full [max-width:calc(49.5%-8px)] rounded-lg mb-4 min-h-[200px] peer-data-[video]:ml-4"
      />
    )
  }
  return <Link href={href} {...rest} />
}
Anchor.displayName = Anchor.name

type Meta = {
  project: string
}

const createComponents = (meta: Meta) => {
  const Img = withCustomImage(meta.project)
  return {
    Image,
    img: Img,
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
      <pre
        {...props}
        className="rounded-xl mb-2.5 mt-2 [line-height:1.42] bg-[#111118] text-[#aaaaca] [overflow:auto] [overflow-wrap:normal] p-6 text-xs sm:text-sm"
      />
    ),
    a: Anchor,
    strong: ({ className, ...rest }: React.HTMLProps<HTMLSpanElement>) => (
      <strong {...rest} className={clsx('font-semibold', className)} />
    ),
    h1: (props: TextProps) => null,
    h2: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h4"
        font="serif"
        fontWeight="medium"
        className={clsx('mt-2 mb-1', className)}
        {...rest}
        as="h2"
      />
    ),
    h3: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h4"
        font="serif"
        fontWeight="regular"
        className={clsx('mt-2 mb-1', className)}
        {...rest}
        as="h3"
      />
    ),
    h4: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h6"
        font="serif"
        fontWeight="medium"
        className={clsx('mt-2 mb-1', className)}
        {...rest}
        as="h4"
      />
    ),
    h5: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h6"
        font="serif"
        fontWeight="medium"
        className={clsx('mt-2 mb-1', className)}
        {...rest}
        as="h5"
      />
    ),
    h6: (props: TextProps) => (
      <Typography type="h6" font="serif" {...props} as="h5" />
    ),
    p: (props: TextProps) => {
      // Hack for react-sheet-slide images
      const data = React.Children.map(
        (props?.children || []) as unknown,
        child => {
          if (!child) return 'none'
          const t =
            child && typeof child === 'object' && 'type' in child
              ? child.type
              : ''
          if (!t) return undefined
          if (typeof t === 'function') return t.name
          return t
        }
      ).join(' ')
      const child = props?.children || {}
      const getProps = (child: unknown) =>
        child &&
        typeof child === 'object' &&
        'props' in child &&
        !!child.props &&
        typeof child.props === 'object'
          ? child.props
          : {}
      const innerProps = getProps(child)
      const linkSrc =
        innerProps &&
        typeof innerProps === 'object' &&
        'href' in innerProps &&
        typeof innerProps.href === 'string'
          ? innerProps.href
          : ''
      if (data === 'img img') {
        const images = React.Children.map(props.children, child => (
          <Img
            inset="none"
            {...(getProps(child) as React.ComponentProps<typeof Img>)}
            width="50%"
          />
        ))
        return (
          <span className="inline-flex justify-between gap-x-4">{images}</span>
        )
      } else if (videoType.test(linkSrc) && data === Anchor.displayName) {
        return <>{props.children}</>
      }
      return <Typography type="body1" {...props} as="p" />
    }
  }
}

type MdxProps = {
  code: string
  meta?: Meta
}

export const Mdx: React.FC<MdxProps> = ({ code, meta = { project: '' } }) => {
  const Component = useMDXComponent(code)
  const components = useMemo(() => createComponents(meta), [meta])
  return <Component components={components} />
}
