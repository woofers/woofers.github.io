import { Text, Stack } from 'components/styled'

const Logo: React.FC<{ className?: string; header?: boolean }> = ({
  className,
  header
}) => (
  <Stack gutter="0" as={header ? 'h1' : 'span'} reverse className={className}>
    <Text type="h1" as="span" font="serif" fontWeight="bold">
      Jaxson
    </Text>
    <Text
      type="h4"
      as="span"
      font="serif"
      fontStyle="italic"
      className="[margin-bottom:-14px] [margin-left:52px] [font-weight:300] sm:[margin-left:31px]"
    >
      Van Doorn
    </Text>
  </Stack>
)

export default Logo
