
export const toGitHubLink = (link, repo) => {
  return toAbsoluteLink(link, `//raw.githubusercontent.com/woofers/${repo}/main/` )
}

export const toAbsoluteLink = (link, prefix) => {
  const relativeLink = /^\.\//g
  if (relativeLink.test(link)) {
    link = link.replace(relativeLink, prefix)
  }
  return link
}
