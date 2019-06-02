const changeCase = string => string.replace(/(^.|-(.))/g, g =>  g.replace(/-/g, ' ').toUpperCase())

export const mutateRepoNames = (repos, exclude) => {
  const excluded = {}
  for (const key of exclude) {
    excluded[key[0]] = key[1]
  }
  const replace = name => {
    if (excluded[name]) return excluded[name]
    if (excluded.hasOwnProperty(name)) return ''
    return changeCase(name)
  }
  for (const edge of repos) {
    const repo = edge.node
    repo.fullName = replace(repo.name)
  }
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
