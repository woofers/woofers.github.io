const path = require(`path`)
const slash = require(`slash`)

// Create pages from Org and GitHub content
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    if (!process.env.GH_TOKEN) {
      const error = 'GitHub API token is not set.  Set it with `export GH_TOKEN=mytoken`'
      return reject(error)
    }
    graphql(
      `
        {
          allOrgContent(
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                  path
                }
                meta {
                  type
                }
              }
            }
          }
          allRepositories {
            edges {
              node {
                name
              }
            }
          }
        }
      `
    ).then(result => {

      // Reject any GraphQL errors
      if (result.errors) return reject(result.errors)

      // Resolve component based on type
      const template = type => slash(path.resolve(`src/templates/${type || 'post'}.js`))

      // Create pages from Org content
      result.data.allOrgContent.edges.forEach(({ node }) => {
        let path = node.meta.slug || node.fields.path
        if (path.startsWith('/projects/')) path += 'play/'
        createPage({
          path: path,
          component: template(node.meta.type),
          context: {
            slug:  node.fields.slug
          },
        })
      })

      // Create pages from GitHub content
      result.data.allRepositories.edges.forEach(({ node }) => {
        const { name } = node
        createPage({
          path: `/projects/${name}/`,
          component: template('github'),
          context: {
            repo: name
          },
        })
      })

      resolve()
    })
  })
}

// Set page URL for Org content based on file path
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `File`) {
    const folder = node.relativeDirectory
    const fileName = node.name
    const slug = `/${path.join(folder, fileName)}/`
    createNodeField({ node, name: `slug`, value: slug })
  } else if (
    node.internal.type === `OrgContent` &&
      typeof node.slug === `undefined`
  ) {
    let fileNode = getNode(node.parent)
    fileNode = getNode(fileNode.parent)
    createNodeField({
      node,
      name: `path`,
      value: fileNode.fields.slug
    })
  }
}
