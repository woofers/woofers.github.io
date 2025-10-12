import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const LISTEN_API = 'https://listen.jaxs.onl'

type NowPlayingData = {
  id: string
  title: string
  artist: string
  album: string
  paused: boolean
  cover: string
  preview: string | null
  url: string
  at: number
  length: number
  stopped: boolean
  timestamp: number
}

const fetchNowPlaying = async () => {
  try {
    const response = await fetch(`${LISTEN_API}/song`)
    if (!response.ok) {
      throw new Error('Failed to fetch now playing data')
    }
    const data = await response.json()
    return data as NowPlayingData
  } catch (error) {
    throw new Error('Failed to fetch now playing data', { cause: error })
  }
}

const MAX_REQUEST_COUNT = 40

export const useNowPlaying = ({ enabled = true }: { enabled?: boolean }) => {
  const [requestCount, setRequestCount] = useState(0)
  const data = useQuery({
    queryKey: ['now-playing'],
    queryFn: fetchNowPlaying,
    refetchInterval: 30_000,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    enabled: enabled && requestCount < MAX_REQUEST_COUNT
  })
  useEffect(() => {
    setRequestCount(requestCount => requestCount + 1)
  }, [data.dataUpdatedAt])
  return data
}
