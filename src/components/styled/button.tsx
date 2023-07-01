import React from 'react'
import Box from './box'
import { clsx, cva } from 'cva'
import type { BoxProps } from './box'
import type { VariantProps } from 'cva'

const button = cva([], {
  variants: {
    theme: {
      primary: [
        'bg-gray-900',
        'text-slate-100',
        'rounded-xl',
        'h-11',
        'px-3',
        'py-2',
        'font-semibold'
      ]
    }
  },
  defaultVariants: {
    theme: 'primary'
  }
})

type ButtonVariants = VariantProps<typeof button>

type InputProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = BoxProps &
  ButtonVariants & {
    onClick?: () => void
    type?: InputProps['type']
    title?: string
    ariaLabel?: string
  }

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  title,
  ariaLabel,
  onClick,
  className,
  theme = 'primary',
  ...rest
}) => (
  <Box
    justifyContent="center"
    display="inlineFlex"
    alignItems="center"
    as="button"
    {...rest}
    onClick={onClick}
    type={type}
    title={title}
    aria-label={ariaLabel}
    className={clsx(button({ theme }), className)}
  >
    {children}
  </Box>
)

export default Button
