import { get } from './http'
import { createCacheFor } from './cache'

type Stats = {
  downloads: number
  end: string
  start: string
  package: string
}

const getNpmDownloads = <T extends string>(
  name: T,
  _start: string,
  _end: string
) => get<Stats>(`https://api.npmjs.org/downloads/point/last-year/${name}`)

type PackageData = { downloads: number }
const { cache, isNotExpired, cacheEnabled } = createCacheFor<PackageData>()

const fromNpm = async ({
  name,
  start = '2019-01-01',
  end = '2040-01-01'
}: {
  name: string
  start?: string
  end?: string
}) => {
  if (cacheEnabled) {
    const cached = cache.get(name)
    if (isNotExpired(cached)) {
      return cached.data
    }
  }
  const result = await getNpmDownloads(name, start, end)
  const toReturn = { downloads: result.downloads }
  if (cacheEnabled) {
    cache.set(name, {
      data: toReturn,
      timestamp: Date.now()
    })
  }
  return toReturn
}

export const getPackage = async (name: string) => {
  const data = await fromNpm({ name })
  return { downloads: data.downloads }
}
