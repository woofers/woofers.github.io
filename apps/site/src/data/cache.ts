type CacheEntry<T> = {
  data: T
  timestamp: number
}

export const createCacheFor = <T>(ttlMs = 5 * 60 * 1000) => {
  const cache = new Map<string, CacheEntry<T>>()
  const isNotExpired = (
    cached: CacheEntry<T> | undefined
  ): cached is CacheEntry<T> =>
    !!cached && Date.now() - cached.timestamp <= ttlMs
  return {
    cache,
    isNotExpired,
    cacheEnabled: process.env.NODE_ENV === 'development'
  }
}
