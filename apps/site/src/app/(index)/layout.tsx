import { AppContainer } from 'components/app-container'
import { ViewTransition } from 'components/view-transition'

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ViewTransition name="page" default="none" share="fade">
    <AppContainer>{children}</AppContainer>
  </ViewTransition>
)

export default MainLayout
