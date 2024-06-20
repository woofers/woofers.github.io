import { get } from './http'

const getNpmDownloads = <T extends string>(
  name: T,
  start: string,
  end: string
) =>
  get<Record<T, Record<string, number>>>(
    `https://npm-stat.com/api/download-counts?package=${name}&from=${start}&until=${end}`,
    { next: { revalidate: 60 } }
  )

const fromNpm = async ({
  name,
  start = '2019-01-01',
  end = '2040-01-01'
}: {
  name: string
  start?: string
  end?: string
}) => {
  const result = await getNpmDownloads(name, start, end)
  const data = Object.values(result[name]).reduce((a, b) => a + b, 0)
  return { downloads: data }
}

// npm-stat.com API is down
// Fetched info manually from npm-stats.org instead
// Need to remove this once resolved or find alternate API
const dl = {
  'react-wavify': 255532,
  'react-sheet-slide': 11079,
  'use-eye-dropper': 413332,
  'react-pico-8': 1526,
  'react-micron': 588,
  'react-yat': 538,
  'react-dialog-polyfill': 25991
} as Record<string, number>

export const getPackage = async (name: string) => {
  return { downloads: dl[name] }
}
