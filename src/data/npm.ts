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

export const getPackage = async (name: string) => {
  //const data = await fromNpm({ name })
  return 0
}
