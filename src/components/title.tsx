import { Text } from 'components/styled'
import { clsx } from 'cva'

const Title: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) =>
  !!children ? (
    <Text
      type="h3"
      as="h1"
      font="serif"
      fontWeight="medium"
      className={clsx('mt-2.5 sm:mt-0', className)}
    >
      {children}
    </Text>
  ) : null

export default Title
