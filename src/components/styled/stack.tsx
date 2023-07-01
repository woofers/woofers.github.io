import Box from './box'
import { cva, clsx } from 'cva'
import type { VariantProps } from 'cva'
import type { BoxProps } from './box'

const values = [
  0, 0.5, 1, 1.5, 2, 2.5, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28,
  32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
] as const

type RawSpaceToken = (typeof values)[number]
type SpaceToken = `${RawSpaceToken}`
type GutterSetup = Record<SpaceToken, [string]>
/*
const gutter = values.reduce(
  (acc, n) => ({ ...acc, [`${n}`]: [`gap-y-${n}`] }),
  {} as GutterSetup
)
*/
const gutter: GutterSetup = {
  '0': ['gap-y-0'],
  '1': ['gap-y-1'],
  '2': ['gap-y-2'],
  '4': ['gap-y-4'],
  '5': ['gap-y-5'],
  '6': ['gap-y-6'],
  '7': ['gap-y-7'],
  '8': ['gap-y-8'],
  '9': ['gap-y-9'],
  '10': ['gap-y-10'],
  '11': ['gap-y-11'],
  '12': ['gap-y-12'],
  '14': ['gap-y-14'],
  '16': ['gap-y-16'],
  '20': ['gap-y-20'],
  '24': ['gap-y-24'],
  '28': ['gap-y-28'],
  '32': ['gap-y-32'],
  '36': ['gap-y-36'],
  '40': ['gap-y-40'],
  '44': ['gap-y-44'],
  '48': ['gap-y-48'],
  '52': ['gap-y-52'],
  '56': ['gap-y-56'],
  '60': ['gap-y-60'],
  '64': ['gap-y-64'],
  '72': ['gap-y-72'],
  '80': ['gap-y-80'],
  '96': ['gap-y-96'],
  '0.5': ['gap-y-0.5'],
  '1.5': ['gap-y-1.5'],
  '2.5': ['gap-y-2.5'],
  '3.5': ['gap-y-3.5']
}

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
