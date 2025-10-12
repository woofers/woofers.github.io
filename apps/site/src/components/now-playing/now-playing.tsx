'use client'

import { Box } from '@jaxson/ui/box'
import { SpotifyIcon } from 'components/brand-icons'
import { useIos } from 'hooks/use-ios'
import { useMediaQuery } from 'hooks/use-media-query'
import { useNowPlaying } from 'hooks/use-now-playing'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import { musicText } from './now-playing.css'

const MotionBox = motion.create(Box)

const MusicNote = ({
  delay = 0,
  x = 0,
  rotate = 10,
  removeBlur = false
}: {
  delay?: number
  x?: number
  rotate?: number
  removeBlur?: boolean
}) => (
  <MotionBox
    initial={{ opacity: removeBlur ? 1 : 0, scale: 0, y: 0, x }}
    animate={{
      ...(!removeBlur
        ? {
            filter: ['blur(0px)', 'blur(0px)', 'blur(4px)'],
            opacity: [0.5, 0.5, 0]
          }
        : {}),
      scale: [0, 1, 1.1],
      rotate: [0, rotate, 0],
      y: [-10, -35, -60]
    }}
    transition={{
      duration: 1.7,
      delay,
      repeat: Infinity,
      ease: 'easeIn'
    }}
    color="$music"
    style={{
      position: 'absolute',
      fontSize: '12px',
      pointerEvents: 'none',
      willChange: 'transform, opacity'
    }}
  >
    ♪
  </MotionBox>
)

type NowPlayingData = NonNullable<
  Awaited<ReturnType<typeof useNowPlaying>>['data']
>

const isSongDefined = (
  data: NowPlayingData | undefined
): data is NowPlayingData => {
  return !!data
}

const isSongPlaying = (
  song: NowPlayingData | undefined
): song is NowPlayingData & { stopped: false; paused: false } => {
  return !!song && !song.stopped && !song.paused
}

export const NowPlaying = () => {
  const { data: song, isLoading, error } = useNowPlaying({ enabled: true })
  const isIos = useIos()
  const isLoadingOrError = isLoading || error
  const songDisplay = song ? `${song.title} - ${song.artist}` : ''
  return (
    <AnimatePresence mode="wait">
      {isLoadingOrError || !isSongDefined(song) || song.stopped ? (
        <Box height="28px" aria-hidden key="now-playing-empty" />
      ) : (
        <MotionBox
          title={`${isSongPlaying(song) ? 'Playing' : 'Paused'} ${song.title} by ${song.artist}`}
          key={songDisplay}
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          display="flex"
          alignItems="center"
          gap="$150"
          px={{
            mobile: '0',
            tablet: '28px'
          }}
        >
          <Box
            position="relative"
            display="inline-block"
            userSelect="none"
            style={{
              flex: '0 0 14px'
            }}
          >
            <SpotifyIcon width={14} height={14} />
            {isSongPlaying(song) && (
              <>
                <MusicNote delay={1.5} x={9} rotate={-2} removeBlur={isIos} />
                <MusicNote delay={1.92} x={-2} rotate={-5} removeBlur={isIos} />
              </>
            )}
          </Box>
          <MotionBox
            layout
            cursor="default"
            color="$musicText"
            fontSize={{
              mobile: '10px',
              tablet: '$xs'
            }}
            fontWeight="$medium"
            display="flex"
          >
            <Box
              as="span"
              display="block"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              className={musicText}
            >
              <span>{songDisplay}</span>{' '}
            </Box>
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}
