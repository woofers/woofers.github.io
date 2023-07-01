import { clsx, cva } from 'cva'
import React from 'react'
import type { VariantProps } from 'cva'

const input = cva([], {
  variants: {
    size: {
      small: ['px-2.5', 'py-1', 'rounded-lg'],
      normal: ['px-3', 'py-2.5', 'rounded-lg']
    },
    theme: {
      primary: [
        'bg-zinc-100',
        'border-solid',
        'border-stone-200',
        'border',
        'transition-colors',
        'placeholder:transition-colors',
        'placeholder:text-zinc-400',
        'hover:placeholder:text-zinc-500'
      ]
    }
  },
  defaultVariants: {
    size: 'normal',
    theme: 'primary'
  }
})

type InputVaraints = VariantProps<typeof input>

type DataProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

type InputProps = DataProps & InputVaraints

const Input: React.FC<InputProps> = ({
  className,
  type = 'text',
  size = 'normal',
  theme = 'primary',
  ...rest
}) => (
  <input
    {...rest}
    type={type}
    className={clsx(input({ size, theme }), className)}
  />
)

export default Input
