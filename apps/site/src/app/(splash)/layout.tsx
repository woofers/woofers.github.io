import { Box } from '@jaxson/ui/box'
import { AppContainer } from 'components/app-container'
import { ViewTransition } from 'components/view-transition'

const SplashLayout: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <ViewTransition name="page" default="fade">
    <AppContainer>{children}</AppContainer>
  </ViewTransition>
)

export default SplashLayout
