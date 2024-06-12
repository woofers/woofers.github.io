import { Text, Stack } from 'components/styled'
import { clsx } from 'cva'

const Logo: React.FC<{ className?: string; header?: boolean }> = ({
  className,
  header
}) => (
  <Stack gutter="0" as={header ? 'h1' : 'span'} reverse className={className}>
    <Text
      type="h1"
      as="span"
      font="serif"
      fontWeight="bold"
      className={clsx(!header && '[font-size:2.4rem]')}
    >
      Jaxson
    </Text>
    <Text
      type={header ? 'h4' : 'h1'}
      as="span"
      font="serif"
      fontStyle="italic"
      className={clsx(
        'font-light',
        header &&
          '[margin-bottom:-14px] [margin-left:52px] sm:[margin-left:31px]',
        !header && '[margin-bottom:-8px] [margin-left:28px] [font-size:1.2rem]'
      )}
    >
      Van Doorn
    </Text>
  </Stack>
)

export default Logo
