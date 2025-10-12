'use client'
import { Box, type BoxProps } from '@jaxson/ui/box'
import { prose } from '@jaxson/ui/typography'
import clsx from 'clsx'
import { GutterContent } from 'components/gutter-content'
import { code, InlineCode } from 'components/inline-code'
import Link from 'components/link'
import { PageContainer } from 'components/page-container'
import { TableOfContents, type TocEntry } from 'components/table-of-contents'
import {
  type MDXComponent,
  useMDXComponentWithOtherExports
} from 'hooks/use-mdx'
import type { MDXComponents } from 'mdx/types'
import React, { useMemo } from 'react'
import {
  gutterWrapperClassName,
  heading,
  hideFirstLine,
  hideSecondLine,
  video
} from './mdx-components.css'

type InsetProps = { inset?: 'both' | 'left' | 'right' | 'none' }

type ImageProps = Omit<React.ComponentPropsWithRef<'img'>, 'src'> &
  InsetProps & {
    src: string
  }

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
    // biome-ignore lint/a11y/useAltText: Alt is set
    <Box
      as="img"
      mt="$800"
      mb="$1600"
      ml={inset === 'left' || inset === 'both' ? 'auto' : '0'}
      mr={inset === 'right' || inset === 'both' ? 'auto' : '0'}
      borderRadius="$md"
      className={className}
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

type TextProps = BoxProps

type LinkProps = React.ComponentProps<'a'>

const videoTypes = ['mov', 'mp4', 'mpeg']
const prefix = '\\.'
const videoType = new RegExp(
  `(${prefix}${videoTypes.reduce((a, b) => `${a}|${prefix}${b}`)})$`
)

const Video: React.FC<React.ComponentProps<'video'>> = ({ src, ...rest }) => {
  return (
    <Box
      as="video"
      src={src}
      controls
      data-video
      muted
      display="inline-flex"
      width="100%"
      maxWidth="calc(49.7% - 8px)"
      borderRadius="$lg"
      mb="$400"
      minHeight="200px"
      className={video}
      {...rest}
    />
  )
}

const Anchor: React.FC<LinkProps> = ({ href, ...rest }) => {
  if (videoType.test(href ?? '')) {
    return <Video src={href} />
  }
  return <Link href={href} {...rest} />
}
Anchor.displayName = Anchor.name

type Meta = {
  shouldHideFirstLine?: boolean
  shouldHideSecondLine?: boolean
  project: string
  removeTocFirstLine?: boolean
}

const withRemoveEmpty = <TProps extends { children: React.ReactNode }>(
  Component: React.FC<TProps>
) => {
  const Comp = (props: TProps) => {
    if (!props.children) {
      return null
    }
    return <Component {...props} />
  }
  Comp.displayName = Component.displayName
  return Comp
}

const createComponents = (meta: Meta) => {
  const Img = withCustomImage(meta.project)
  return {
    img: Img,
    pre: (props: React.ComponentPropsWithRef<'pre'>) => (
      <Box
        fontSize={{
          mobile: '0.8125rem',
          tablet: '0.9375rem'
        }}
        lineHeight={{
          mobile: '1.3',
          tablet: '1.4'
        }}
      >
        <Box
          as="pre"
          {...props}
          borderRadius="$md"
          mb="$200"
          mt="$200"
          whiteSpace="pre-wrap"
          backgroundColor="$codeBackground"
          borderColor="$codeBlockBorder"
          borderStyle="solid"
          borderWidth="1px"
          color="#aaaaca"
          p="$800"
          fontFamily="$mono"
          fontSize="0.8571429em"
          overflowX="auto"
        />
      </Box>
    ),
    a: Anchor,
    strong: ({ className, ...rest }: React.ComponentPropsWithRef<'strong'>) => (
      <Box as="strong" {...rest} fontWeight="$semibold" className={className} />
    ),
    code: ({ className, ...rest }: React.ComponentPropsWithRef<'code'>) => (
      <InlineCode className={className} {...rest} />
    ),
    h1: withRemoveEmpty(({ className, ...rest }: TextProps) => (
      <Box as="h2" className={clsx(prose, heading, className)} {...rest} />
    )),
    h2: withRemoveEmpty(({ className, ...rest }: TextProps) => (
      <Box as="h2" className={clsx(prose, heading, className)} {...rest} />
    )),
    h3: withRemoveEmpty(({ className, ...rest }: TextProps) => (
      <Box as="h3" className={clsx(prose, heading, className)} {...rest} />
    )),
    h4: withRemoveEmpty(({ className, ...rest }: TextProps) => (
      <Box as="h4" className={clsx(prose, heading, className)} {...rest} />
    )),
    h5: withRemoveEmpty(({ className, ...rest }: TextProps) => (
      <Box as="h5" className={clsx(prose, heading, className)} {...rest} />
    )),
    h6: withRemoveEmpty(({ className, ...rest }: TextProps) => (
      <Box as="h6" className={clsx(prose, heading, className)} {...rest} />
    )),
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

      if (typeof child === 'object' && Array.isArray(child)) {
        const isEmpty =
          child.filter(c => typeof c !== 'string' || c?.trim()).length <= 0
        if (isEmpty) {
          return null
        }
      }

      if (!child) {
        return null
      } else if (typeof child === 'string' && videoType.test(child)) {
        return <Video src={child} />
      } else if (data === 'img img') {
        const images = React.Children.map(
          props.children,
          child => getProps(child) as React.ComponentProps<'img'>
        )
          ?.filter(props => props.src)
          .map(props => (
            <Box
              key={typeof props.src === 'string' ? props.src : ''}
              as="img"
              flex="1"
              borderRadius="$md"
              {...props}
            />
          ))
        return (
          <Box
            as="span"
            gap="$400"
            px="$025"
            display="inline-flex"
            justifyContent="space-between"
          >
            {images}
          </Box>
        )
      } else if (videoType.test(linkSrc) && data === Anchor.displayName) {
        return <>{props.children}</>
      }
      return <Box as="p" className={prose} {...props} />
    }
  } as MDXComponents
}

type MdxProps = {
  code: string
  meta?: Meta
}

const BaseMdx: React.FC<{ component: MDXComponent; meta?: Meta }> = ({
  component: Component,
  meta = {
    project: '',
    shouldHideFirstLine: false,
    shouldHideSecondLine: false
  }
}) => {
  const components = useMemo(() => createComponents(meta), [meta])
  return (
    <Box
      className={clsx(
        prose,
        meta.shouldHideFirstLine && hideFirstLine,
        meta.shouldHideSecondLine && hideSecondLine
      )}
      pb="$1600"
    >
      <Component components={components} />
    </Box>
  )
}

export const Mdx: React.FC<MdxProps> = ({
  code,
  meta = {
    project: '',
    shouldHideFirstLine: false,
    shouldHideSecondLine: false
  }
}) => {
  const [Component] = useMDXComponentWithOtherExports(code)
  if (!code) {
    return null
  }
  return <BaseMdx component={Component} meta={meta} />
}

export const MdxWithTableOfContents: React.FC<
  MdxProps & { children: React.ReactNode }
> = ({
  children,
  code,
  meta = {
    project: '',
    shouldHideFirstLine: false,
    shouldHideSecondLine: false,
    removeTocFirstLine: false
  }
}) => {
  const [Component, otherExports] = useMDXComponentWithOtherExports(code)
  const tableEntries = useMemo(
    () =>
      otherExports.tableOfContents
        ? (otherExports.tableOfContents as unknown as TocEntry[]).filter(
            entry => !!entry.value
          )
        : [],
    [otherExports.tableOfContents]
  )
  if (!code) {
    return null
  }
  return (
    <>
      <GutterContent top="$300" className={gutterWrapperClassName}>
        {tableEntries.length > 0 && (
          <Box
            pt="12px"
            pl="$1200"
            flex="1"
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <TableOfContents
              toc={tableEntries}
              removeFirstLine={meta.removeTocFirstLine}
            />
          </Box>
        )}
      </GutterContent>
      <PageContainer>
        {children}
        <BaseMdx component={Component} meta={meta} />
      </PageContainer>
    </>
  )
}
