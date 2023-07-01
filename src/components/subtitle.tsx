import { Text } from 'components/styled'

const Subtitle: React.FC<{ children?: React.ReactNode }> = ({ children }) =>
  !!children ? (
    <Text type="h5" as="p" className="text-zinc-500 dark-mode:text-neutral-500">
      {children}
    </Text>
  ) : null

export default Subtitle
