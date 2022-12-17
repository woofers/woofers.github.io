import { ThemeProvider } from 'components/theme-provider'
import Global from 'components/global'
import GoogleFonts from 'components/google-fonts'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <GoogleFonts
        fonts={[
        ]}
      >
        <link href="/fonts/albertsans/font.css" rel="stylesheet" />
      </GoogleFonts>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
