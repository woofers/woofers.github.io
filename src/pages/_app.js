import { ThemeProvider } from '@emotion/react'
import Layout from '../components/layout'
import theme from '../themes'

const App = ({ Component, pageProps: props }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...props} />
    </Layout>
  </ThemeProvider>
)

export default App
