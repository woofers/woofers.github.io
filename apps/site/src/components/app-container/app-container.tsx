import { Box } from '@jaxson/ui/box'
import { container } from './app-container.css'

export const AppContainer: React.FC<{ children: React.ReactNode }> = ({
  children
}) => <Box className={container}>{children}</Box>
