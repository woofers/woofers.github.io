import Box from './box'
import { cva, clsx } from 'cva'
import type { VariantProps } from 'cva'
import type { BoxProps } from './box'

const gutter = {
  '0': ['gap-x-0'],
  '1': ['gap-x-1'],
  '1.5': ['gap-x-1.5'],
  '2': ['gap-x-2'],
  '4': ['gap-x-4'],
  '6': ['gap-x-6'],
  '8': ['gap-x-8'],
  '10': ['gap-x-10']
} as const

const stack = cva([], {
  variants: {
    gutter
  }
})

type RowVariants = VariantProps<typeof stack>

type RowProps = Omit<BoxProps, 'display' | 'flexDirection'> &
  RowVariants & { reverse?: boolean; inline?: boolean }

const Row: React.FC<RowProps> = ({
  children,
  className,
  gutter,
  reverse = false,
  inline = false,
  ...rest
}) => (
  <Box
    display={!inline ? 'flex' : 'inlineFlex'}
    flexDirection={!reverse ? 'row' : 'rowReverse'}
    className={clsx(stack({ gutter }), className)}
    {...rest}
  >
    {children}
  </Box>
)

export default Row
