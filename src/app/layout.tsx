import './globals.css'
import 'react-pico-8/styles.css'
import localFont from 'next/font/local'
import { clsx } from 'cva'

const eiko = localFont({
  src: [
    {
      path: '../../public/fonts/eiko/eiko-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/eiko/eiko-300i.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/eiko/eiko-400.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/eiko/eiko-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/eiko/eiko-500i.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/eiko/eiko-700.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/eiko/eiko-700i.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-serif',
  preload: true,
  display: 'swap'
})

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-400.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-500i.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-600.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-800.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-montreal/neue-montreal-800i.woff2',
      weight: '800',
      style: 'italic'
    }
  ],
  variable: '--font-sans-serif',
  preload: true,
  display: 'swap'
})

const isDarkMode = false

const RootLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <html
      lang="en"
      className={clsx(
        isDarkMode ? 'dark' : 'light',
        eiko.variable,
        neueMontreal.variable
      )}
    >
      <head />
      <body>
        <div id="__next">
          <div className="flex min-h-screen flex-col text-zinc-900 bg-zinc-100 dark-mode:text-neutral-800">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
