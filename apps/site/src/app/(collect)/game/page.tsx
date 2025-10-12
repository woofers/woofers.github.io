'use client'
import { Box } from '@jaxson/ui/box'
import { ThreeCanvas } from 'components/canvas'
import type { ImageLoader } from 'next/image'
import NextImage from 'next/image'
import { useState } from 'react'
import { collection } from './_covers'
import { platforms } from './_platforms'

const getEncodedSrc = (src: string) =>
  src
    .split('/')
    .map(path => encodeURIComponent(path))
    .join('/')

const FORMAT = 'webp'
const QUALITY = 80

const loader: ImageLoader = ({ src, width, quality }) => {
  const path = src.replace('https://cdn.cartgg.run', '')
  const encodedSrc = getEncodedSrc(path)
  const end = typeof quality !== 'undefined' ? `&quality=${quality}` : ''
  return `https://cdn.cartgg.run${encodedSrc}?format=${FORMAT}&width=${width}${end}`
}

type GameProps = {}

const getKeys = <T extends {}>(obj: T) => Object.keys(obj) as (keyof T)[]

const getPlatforms = () => {
  return getKeys(collection).sort((a, b) => {
    const aPlatformYear = platforms.find(p => p.id === a)?.year
    const bPlatformYear = platforms.find(p => p.id === b)?.year
    return (aPlatformYear ?? 0) - (bPlatformYear ?? 0)
  })
}

const GamePage = (_: GameProps) => {
  const [hovered, setHovered] = useState<{
    game: string
    platform: string
    img_path?: string
  } | null>({
    game: '',
    platform: ''
  })
  return (
    <Box>
      Game
      <ThreeCanvas />
      <Box>
        {getPlatforms().map(platformId => {
          const platform = platforms.find(p => p.id === platformId)
          if (!platform) return null
          const gamesForPlatform = collection[platformId] || []
          return (
            <Box key={platformId} py="$400">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="$400"
                width="100%"
              >
                <Box>
                  <Box as="span" color="$orange">
                    {platform.name}
                  </Box>{' '}
                  {' - '}
                  <Box as="span" color="$neutral400">
                    {platform.year}
                  </Box>
                </Box>
                <Box fontSize="$xs" color="$neutral400">
                  ({gamesForPlatform.length})
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="$0"
                alignItems="flex-start"
              >
                {gamesForPlatform.map(game => {
                  const hasCover = game && 'img_path' in game
                  const displayName = game?.standardName ?? game?.name
                  const rawName = game?.name
                  return (
                    <Box
                      key={rawName}
                      className="game-item"
                      color={hasCover ? '$neutral800' : '$neutral400'}
                      style={{
                        margin: '4px 0'
                      }}
                      textDecoration="none"
                      {...(hasCover
                        ? {
                            as: 'a',
                            href: '#',
                            onMouseEnter: () =>
                              setHovered({
                                game: rawName,
                                platform: platformId,
                                img_path: game.img_path
                              }),
                            onMouseLeave: () => setHovered(null),
                            onFocus: () =>
                              setHovered({
                                game: rawName,
                                platform: platformId,
                                img_path: game.img_path
                              }),
                            onBlur: () => setHovered(null)
                          }
                        : { as: 'span' })}
                    >
                      {displayName}
                    </Box>
                  )
                })}
              </Box>
            </Box>
          )
        })}
        {!!hovered?.game && !!hovered.img_path && (
          <Box position="fixed" right="24px" top="24px">
            <NextImage
              src={hovered.img_path}
              width={440}
              height={440}
              quality={80}
              style={{ objectFit: 'contain' }}
              alt=""
              loader={loader}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default GamePage
