import Box from './box'
import { clsx } from 'cva'

const Container: React.FC<{
  className?: string
  flexGrow?: 'grow' | 'none'
  padding?: 'xy' | 'x' | 'y',
  container?: 'page' | 'full'
  children?: React.ReactNode
}> = ({ children, className, flexGrow = 'grow', padding = 'xy', container = 'page', ...rest }) => (
  <Box
    {...rest}
    flexGrow={flexGrow}
    className={clsx(
      'flex flex-col mx-auto w-full max-w-container',
      container === 'page' ? '[max-width:960px]' : '[max-width:1400px]',
      (padding === 'xy' || padding === 'x') && 'px-4 sm:px-6 lg:px-8',
      (padding === 'xy' || padding === 'y') && 'py-2 sm:py-3 lg:py-4',
      className
    )}
  >
    {children}
  </Box>
)

export default Container
