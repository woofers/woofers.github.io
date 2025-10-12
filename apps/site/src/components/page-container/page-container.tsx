import { Box } from '@jaxson/ui/box'
import clsx from 'clsx'
import { content, contentPadding, inner } from './page-container.css'

export const PageSpacer: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  ...rest
}) => <Box height={{ mobile: '20px', tablet: '120px' }} aria-hidden {...rest} />

export const PageContainer: React.FC<{
  type?: 'normal' | 'wide'
  padding?: 'normal' | 'none'
  children?: React.ReactNode
}> = ({ type = 'normal', padding = 'normal', children }) => (
  <Box className={clsx(content, padding === 'normal' && contentPadding)}>
    <PageSpacer />
    <Box as="main" className={inner}>
      {children}
    </Box>
  </Box>
)
