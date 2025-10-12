import { AppContainer } from 'components/app-container'
import { PageContainer } from 'components/page-container'
import { ViewTransition } from 'components/view-transition'

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ViewTransition name="page" default="none" share="fade">
    <AppContainer>
      <PageContainer type="wide">{children}</PageContainer>
    </AppContainer>
  </ViewTransition>
)

export default MainLayout
