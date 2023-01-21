import { ThemeProvider } from 'components/theme-provider'
import Global from 'components/global'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <link href="/fonts/albertsans/font.css" rel="stylesheet" />
      </Head>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
