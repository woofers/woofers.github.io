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
      fontWeight="regular"
      fontStyle="italic"
      className={clsx(!header && '[font-size:2.4rem]', header && 'text-[#e96b24]')}
    >
      jaxs.on {header && <Text type="plain" as="span" fontStyle="normal" className="text-[#212121] ml-[-5px]">|</Text>}
    </Text>
    <Text
      type={header ? 'h4' : 'h1'}
      as="span"
      font="serif"
      fontStyle="normal"
      className={
        clsx(
          'font-light',
          'lowercase',
          'text-[#424242]',
          header &&
            '[margin-bottom:-14px] [margin-left:65px] sm:[margin-left:45px]',
          !header && '[margin-bottom:-8px] [margin-left:36px] [font-size:1.2rem]'
        )
      }
    >
      Van Doorn
    </Text>
  </Stack>
)

export default Logo
