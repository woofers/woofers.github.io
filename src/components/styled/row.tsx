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
  (acc, n) => ({ ...acc, [`${n}`]: [`gap-x-${n}`] }),
  {} as GutterSetup
)
*/
const gutter: GutterSetup = {
  '0': ['gap-x-0'],
  '1': ['gap-x-1'],
  '2': ['gap-x-2'],
  '4': ['gap-x-4'],
  '5': ['gap-x-5'],
  '6': ['gap-x-6'],
  '7': ['gap-x-7'],
  '8': ['gap-x-8'],
  '9': ['gap-x-9'],
  '10': ['gap-x-10'],
  '11': ['gap-x-11'],
  '12': ['gap-x-12'],
  '14': ['gap-x-14'],
  '16': ['gap-x-16'],
  '20': ['gap-x-20'],
  '24': ['gap-x-24'],
  '28': ['gap-x-28'],
  '32': ['gap-x-32'],
  '36': ['gap-x-36'],
  '40': ['gap-x-40'],
  '44': ['gap-x-44'],
  '48': ['gap-x-48'],
  '52': ['gap-x-52'],
  '56': ['gap-x-56'],
  '60': ['gap-x-60'],
  '64': ['gap-x-64'],
  '72': ['gap-x-72'],
  '80': ['gap-x-80'],
  '96': ['gap-x-96'],
  '0.5': ['gap-x-0.5'],
  '1.5': ['gap-x-1.5'],
  '2.5': ['gap-x-2.5'],
  '3.5': ['gap-x-3.5']
}

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
