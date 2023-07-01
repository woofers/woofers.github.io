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

export const getRepoType = <
  T extends {
    fullName: string | boolean
    name: string
    topics?: { nodes: { topic: { name?: string } }[] }
  }
>(
  repo: T
) => {
  if (!repo) return 'no type'
  const topics = repo.topics
  if (topics) {
    const nodes = topics.nodes
    const labels = nodes.map(label => label.topic.name)
    if (labels.includes('game')) return 'game'
    else if (labels.includes('react')) return 'react'
    else if (labels.includes('resume')) return 'resume'
  }
  return 'no type'
}
