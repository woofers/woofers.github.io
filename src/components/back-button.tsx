import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { Row, Text, Link } from 'components/styled'
import { clsx } from 'cva'

const BackButton: React.FC<{ href: string; className?: string }> = ({
  href,
  className
}) => (
  <Link
    href={href}
    aria-label="Back"
    theme="plain"
    className={clsx('px-4 py-4 block', className)}
  >
    <Row
      as="span"
      gutter="2"
      className="text-zinc-500 dark-mode:text-neutral-500"
      alignItems="center"
    >
      <HiMiniArrowUturnLeft />
      <Text type="body1" as="span">
        back
      </Text>
    </Row>
  </Link>
)

export default BackButton
