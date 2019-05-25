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

export const readme = node => node ? node.text : ''
