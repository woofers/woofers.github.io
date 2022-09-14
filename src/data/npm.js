import { get } from './http'

const getNpmDownloads = (name, start, end) =>
  get(
    `https://npm-stat.com/api/download-counts?package=${name}&from=${start}&until=${end}`
  )

const fromNpm = async ({ name, start = '2019-01-01', end = '2040-01-01' }) => {
  const result = await getNpmDownloads(name, start, end)
  const data = Object.values(result[name]).reduce((a, b) => a + b, 0)
  return { downloads: data }
}

export const getPackage = async name => {
  const data = await fromNpm({ name })
  return data
}
