import React from 'react'
import { cva, clsx } from 'cva'
import type { VariantProps } from 'cva'

const box = cva(['min-w-0', 'box-border', 'm-0'], {
  variants: {
    display: {
      block: ['block'],
      inlineBlock: ['inline-block'],
      inline: ['inline'],
      flex: ['flex'],
      inlineFlex: ['inline-flex']
    },
    justifyContent: {
      flexStart: ['justify-start'],
      flexEnd: ['justify-end'],
      center: ['justify-center'],
      spaceBetween: ['justify-between'],
      spaceAround: ['space-around'],
      spaceEvenly: ['space-evenly']
    },
    alignItems: {
      flexStart: ['items-start'],
      flexEnd: ['items-end'],
      center: ['items-center'],
      baseline: ['items-baseline'],
      stretch: ['items-stretch']
    },
    flexDirection: {
      row: ['flex-row'],
      rowReverse: ['flex-row-reverse'],
      column: ['flex-col'],
      columnReverse: ['flex-col-reverse']
    },
    flexGrow: {
      grow: ['grow'],
      none: ['grow-0']
    },
    position: {
      sticky: ['sticky'],
      static: ['static'],
      absolute: ['absolute'],
      relative: ['relative'],
      block: ['block']
    }
  },
  defaultVariants: {}
})

type BoxVariants = VariantProps<typeof box>

type RawBoxProps = BoxVariants & {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

type FullBoxProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, RawBoxProps>

type BoxComponent = <C extends React.ElementType = 'div'>(
  props: FullBoxProps<C>
) => React.ReactElement | null

// eslint-disable-next-line react/display-name
const Box = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      className,
      children,
      style,
      as,
      display,
      justifyContent,
      alignItems,
      flexDirection,
      flexGrow,
      position,
      ...rest
    }: FullBoxProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'
    return (
      <Component
        {...rest}
        className={clsx(
          box({
            display,
            justifyContent,
            alignItems,
            flexDirection,
            flexGrow,
            position
          }),
          className
        )}
        style={style}
      >
        {children}
      </Component>
    )
  }
) as BoxComponent

export default Box

export type BoxProps = React.ComponentProps<typeof Box>
