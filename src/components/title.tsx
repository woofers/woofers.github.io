import { Text } from 'components/styled'

const Title: React.FC<{ children?: React.ReactNode }> = ({ children }) =>
  !!children ? (
    <Text
      type="h3"
      as="h1"
      font="serif"
      fontWeight="medium"
      className="mt-2.5 sm:mt-0"
    >
      {children}
    </Text>
  ) : null

export default Title
