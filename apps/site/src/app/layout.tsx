import { ThemeColorMetaScript, ThemeProvider } from '@jaxson/ui/theme-provider'
import '@jaxson/ui/theme/global.css'
import '@jaxson/ui/theme/typography.css'
import '../../public/font/inter/inter.css'
import 'react-pico-8/styles.css'
import { QueryProvider } from 'components/query-provider'
import { ScrollToTop } from 'components/scroll-to-top'
import { Geist_Mono } from 'next/font/google'
import { getMetadata, getViewport } from '../utils/metadata'

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-mono'
})

export const metadata = getMetadata()

export const viewport = getViewport()

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geistMono.variable}>
      <head>
        <ThemeColorMetaScript />
        {/* eslint-disable-next-line @next/next/no-sync-scripts*/}
        <script src="/scripts/onload.js" />
      </head>
      <body suppressHydrationWarning>
        <ScrollToTop />
        <div id="__next">
          <QueryProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </QueryProvider>
        </div>
      </body>
    </html>
  )
}
