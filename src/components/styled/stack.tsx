import Box from './box'
import { cva, clsx } from 'cva'
import type { VariantProps } from 'cva'
import type { BoxProps } from './box'

const gutter = {
  '0': ['gap-y-0'],
  '1': ['gap-y-1'],
  '1.5': ['gap-y-1.5'],
  '2': ['gap-y-2'],
  '3': ['gap-y-3'],
  '4': ['gap-y-4'],
  '6': ['gap-y-6'],
  '7': ['gap-y-7']
} as const

const stack = cva([], {
  variants: {
    gutter
  }
})

type StackVariants = VariantProps<typeof stack>

type StackProps = Omit<BoxProps, 'display' | 'flexDirection'> &
  StackVariants & { reverse?: boolean; inline?: boolean }

const Stack: React.FC<StackProps> = ({
  children,
  className,
  gutter,
  reverse = false,
  inline = false,
  ...rest
}) => (
  <Box
    display={!inline ? 'flex' : 'inlineFlex'}
    flexDirection={!reverse ? 'column' : 'columnReverse'}
    className={clsx(stack({ gutter }), className)}
    {...rest}
  >
    {children}
  </Box>
)

export default Stack
