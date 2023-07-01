'use client'
import { Progress, Row, Box, Stack, Text, Link } from 'components/styled'
import { useState, useRef, useMemo, useEffect } from 'react'
import { get } from 'data/http'
import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import throttle from 'lodash.throttle'

const QueryProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

type SpotifyEmpty = {
  stopped: boolean
  timestamp: number
}

type SpotifySong = SpotifyEmpty & {
  id: string
  title: string
  artist: string
  album: string
  paused: boolean
  cover: string
  preview: string
  url: string
  at?: number
  length?: number
}

type Spotify = SpotifyEmpty | SpotifySong

const isPlaying = (song: Spotify): song is SpotifySong =>
  !!song && !song.stopped && Object.keys(song).length > 0

const getPercentage = (at: number, length: number, diff: number) => {
  const value = Math.round(((at + diff) / length) * 100)
  return !Number.isNaN(value) ? value : 0
}

const msToDisplay = (millis: number) => {
  const date = new Date(Date.UTC(0, 0, 0, 0, 0, 0, millis ?? 0))
  const parts = [date.getUTCMinutes(), date.getUTCSeconds()]
  return parts.map(s => `${s}`.padStart(2, '0')).join(':')
}

const getData = async () => {
  const data = await get<Spotify>('https://spotify.n64.zip/song', {
    credentials: 'omit'
  })
  return data
}

const SongInner: React.FC<Nothing> = () => {
  const [now, setNow] = useState(() => new Date().getTime())
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['spotify'],
    queryFn: getData,
    refetchInterval: 20 * 1000,
    initialData: { stopped: true, timestamp: new Date().getTime() }
  })
  const refetchDebounce = useMemo(
    () => throttle(() => refetch(), 1000),
    [refetch]
  )

  useEffect(() => {
    let ref: number
    const animate = () => {
      setNow(() => Math.round(new Date().getTime()))
      ref = requestAnimationFrame(animate)
    }
    ref = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(ref)
  }, [])

  const playing = isPlaying(data)
  const diff =
    playing && !data.paused ? Math.max(now - Math.floor(data.timestamp), 0) : 0
  const percentage = isPlaying(data)
    ? getPercentage(data.at ?? 0, data.length ?? 0, diff)
    : 0
  const songEnded = playing ? percentage > 100 : false
  useEffect(() => {
    if (!songEnded || isFetching) return
    refetchDebounce()
  }, [songEnded, isFetching, refetchDebounce])
  if (!playing) return null
  return (
    <Stack gutter="4" className="mt-4 flex-grow">
      <Text type="h3" as="h2" font="serif" fontWeight="medium">
        Now Playing
      </Text>
      <Row gutter="6" className="flex-grow">
        <img
          className="rounded-xl"
          src={data.cover}
          alt=""
          width={280}
          height={280}
        />
        <Stack className="flex-grow">
          <Text type="h4" as="span" font="serif" fontWeight="medium">
            {data.title}
          </Text>
          <Text>
            {data.artist} - {data.album}
          </Text>
          <Text>
            {msToDisplay(Math.min((data.at ?? 0) + diff, data.length ?? 0))} /{' '}
            {msToDisplay(data.length ?? 0)}
          </Text>
          <Link href={data.url}>Listen</Link>
          <Text>
            Last updated: {new Date(data.timestamp ?? 0).toISOString()} +{diff}
          </Text>
          <Progress value={Math.min(percentage, 100)} />
        </Stack>
      </Row>
    </Stack>
  )
}

const Song: React.FC<Nothing> = () => (
  <QueryProvider>
    <SongInner />
  </QueryProvider>
)

export default Song
