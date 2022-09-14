import { camelCaseToPascalCase } from './case'

export const mutateRepoNames = (repo, excluded) => {
  const replace = name => {
    if (typeof excluded[name] === 'boolean') return ''
    if (excluded[name]) return excluded[name]
    return camelCaseToPascalCase(name)
  }
  repo.fullName = replace(repo.name)
}

export const type = repo => {
  let labels = repo.topics
  if (labels) {
    labels = labels.nodes
    labels = labels.map(label => label.topic.name)
    if (labels.includes('game')) return 'game'
    else if (labels.includes('react')) return 'react'
    else if (labels.includes('resume')) return 'resume'
  }
  return 'no type'
}
