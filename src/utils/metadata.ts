import type { Metadata, Viewport } from 'next'

const name = 'Jaxson Van Doorn'
const ogImage = '/meta-image.png'

const author = name
const description = 'All-around developer, half-designer and tinkerer.'
const alt = 'Cover image for jaxs.onl'

export const getViewport = ({ themeColor = '#f4f4f5' } = {}) =>
  ({
    themeColor,
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover'
  }) satisfies Viewport

export const getMetadata = ({
  title,
  noIndex = false
}: { title?: string; noIndex?: boolean } = {}) =>
  ({
    title: title ? `${title} | ${name}` : name,
    description,
    creator: name,
    publisher: name,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1
        }
      }
    }),
    icons: {
      icon: [{ url: '/favicon.png' }],
      shortcut: ['/favicon.png'],
      apple: [
        ...[32, 48, 72, 144, 192, 256, 384, 512].map(size => ({
          url: `/icons/mask-${size}x${size}.png`,
          sizes: `${size}x${size}`,
          type: 'image/png'
        }))
      ],
      other: []
    },
    manifest: '/manifest.webmanifest',
    metadataBase:
      process.env.NODE_ENV === 'production'
        ? new URL('https://jaxs.onl')
        : new URL('http://localhost:3000'),
    twitter: {
      card: 'summary_large_image',
      title,
      description: description,
      creator: '@jaxsonvandoorn',
      images: {
        url: ogImage,
        alt
      }
    },
    openGraph: {
      title: name,
      description,
      images: [
        {
          type: 'image/png',
          url: ogImage,
          alt,
          width: 1200,
          height: 630
        }
      ]
    }
  }) satisfies Metadata
