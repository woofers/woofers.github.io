import { ThemeProvider } from 'components/theme-provider'
import Global from 'components/global'
import GoogleFonts from 'components/google-fonts'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <GoogleFonts
        fonts={[
          'Cabin:wght@400;700',
          'Mulish:wght@500;900',
          'Montserrat:wght@500'
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
