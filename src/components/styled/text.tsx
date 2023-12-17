import Box from './box'
import { cva, clsx } from 'cva'
import type { VariantProps } from 'cva'
import type { BoxProps } from './box'

const elements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'div',
  'span',
  'p'
] as const
type ElementType = (typeof elements)[number]

const text = cva([], {
  variants: {
    hidden: {
      true: ['sr-only'],
      false: []
    },
    font: {
      sansSerif: [],
      serif: ['[font-family:var(--font-serif)]'],
      heading: ['[font-family:var(--font-sans-serif)]']
    },
    type: {
      h1: ['text-5xl'],
      h2: ['text-4xl'],
      h3: ['text-3xl'],
      h4: ['text-xl sm:text-2xl'],
      h5: ['text-lg sm:text-xl'],
      h6: ['text-base sm:text-lg'],
      body1: [
        'text-sm [line-height:1.375rem] sm:text-base sm:[line-height:1.75rem]'
      ],
      body2: ['text-sm'],
      plain: []
    },
    fontWeight: {
      regular: ['font-normal'],
      medium: ['font-medium'],
      semibold: ['font-semibold'],
      bold: ['font-bold']
    },
    fontStyle: {
      normal: ['[font-style:normal]'],
      italic: ['italic']
    }
  },
  defaultVariants: {
    font: 'sansSerif',
    type: 'body1',
    hidden: false
  }
})

type TextVariants = VariantProps<typeof text>

const isElementType = (
  variant: TextVariants['type'] | ElementType
): variant is ElementType =>
  !!variant && elements.includes(variant as ElementType)

const getType = (variant: TextVariants['type']): ElementType => {
  if (isElementType(variant)) return variant
  if (!variant) return 'span'
  return 'p'
}

type TextProps = BoxProps & TextVariants

const Text: React.FC<TextProps> = ({
  children,
  className,
  type = 'body1',
  font = 'sansSerif',
  fontStyle,
  fontWeight,
  hidden = false,
  as: asProp,
  ...rest
}) => (
  <Box
    className={clsx(
      text({ type, fontWeight, fontStyle, hidden, font }),
      className
    )}
    as={asProp ?? getType(type)}
    {...rest}
  >
    {children}
  </Box>
)

export default Text
