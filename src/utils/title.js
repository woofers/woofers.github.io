
const makeTitle = (page, site) => {
  if (!page) return site
  return `${page} - ${site}`
}

export default makeTitle
