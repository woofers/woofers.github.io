import { camelCaseToPascalCase } from './case'

export const mutateRepoNames = <
  T extends { fullName: string | boolean; name: string }
>(
  repo: T,
  excluded: Record<string, string | boolean>
) => {
  if (!repo) return
  const replace = (name: string) => {
    if (typeof excluded[name] === 'boolean') return ''
    if (excluded[name]) return excluded[name]
    return camelCaseToPascalCase(name)
  }
  repo.fullName = replace(repo.name)
}

const makeRepoTypeError = (repo: string) => {
  return new Error(`No type for ${repo}`)
}

type RepoBase = {
  fullName: string | boolean
  name: string
  topics?: { nodes: { topic: { name?: string } }[] }
}

export const getNpmName = <T extends RepoBase>(repo: T) => {
  if (repo.name === 'react-micron') return 'react-micron'
  const topics = repo?.topics
  if (!topics) return ''
  const nodes = topics.nodes
  const labels = nodes.map(label => label.topic.name)
  return labels.includes('react') ? repo.name : ''
}

export const getNpmLink = <T extends RepoBase>(repo: T) => {
  const name = getNpmName(repo)
  if (!name) return ''
  return `https://www.npmjs.com/package/${name}`
}

export const getLinkName = <T extends RepoBase>(repo: T) => {
  if (repo.name === 'react-micron') return 'View Homepage'
  const topics = repo?.topics
  if (!topics) return ''
  const nodes = topics.nodes
  const labels = nodes.map(label => label.topic.name)
  if (labels.includes('game')) return 'Play Game'
  else if (labels.includes('react')) return 'View Demo'
  return ''
}

export const getRepoType = <T extends RepoBase>(repo: T) => {
  if (repo.name === 'react-micron') return 'link'
  const topics = repo?.topics
  if (!topics) throw makeRepoTypeError(repo.name)
  const nodes = topics.nodes
  const labels = nodes.map(label => label.topic.name)
  if (labels.includes('game')) return 'play'
  else if (labels.includes('react')) return 'link'
  throw makeRepoTypeError(repo.name)
}
