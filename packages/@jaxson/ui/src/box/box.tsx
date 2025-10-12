import clsx from 'clsx'
import React from 'react'
import { rainbowSprinkles, type Sprinkles } from '../theme/theme.css'

type JoinWithOmit<A extends {}, B extends {}> = A & Omit<B, keyof A>

type NormalBoxProps<T extends React.ElementType = 'div'> = {
  as?: T
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
} & Sprinkles

export type BoxProps<T extends React.ElementType = 'div'> = JoinWithOmit<
  NormalBoxProps<T>,
  React.ComponentPropsWithRef<T>
>

export const Box = <T extends React.ElementType = 'div'>(
  props: BoxProps<T>
): React.JSX.Element => {
  const {
    as,
    children,
    style: componentStyles,
    ref,
    className: initialClass,
    ...rest
  } = props
  const { className, style, otherProps } = rainbowSprinkles(rest)
  const mergedStyles = { ...componentStyles, ...style }
  const Element = as || 'div'
  return (
    <Element
      className={clsx(initialClass, className)}
      style={mergedStyles}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Element>
  )
}
