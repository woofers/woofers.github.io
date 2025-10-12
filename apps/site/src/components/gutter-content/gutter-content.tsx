import { Box, type BoxProps } from '@jaxson/ui/box'
import clsx from 'clsx'
import { PageSpacer } from 'components/page-container'
import { content } from './gutter-content.css'

export const GutterContent: React.FC<
  BoxProps & { wrapperClassName?: string }
> = ({ children, top = '$0', className, style, wrapperClassName, ...rest }) => (
  <Box
    {...rest}
    style={{
      ...style,
      width: '100%',
      flex: '1 1 auto'
    }}
    className={clsx(content, wrapperClassName)}
  >
    <PageSpacer />
    <Box
      position="sticky"
      top={top}
      alignItems="center"
      display="flex"
      justifyContent="center"
      className={className}
    >
      {children}
    </Box>
  </Box>
)

export const GutterWrapper: React.FC<React.ComponentPropsWithRef<'div'>> = ({
  children,
  ...rest
}) => (
  <Box display="flex" {...rest}>
    {children}
  </Box>
)
