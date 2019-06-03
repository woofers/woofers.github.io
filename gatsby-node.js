const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templatesFolder = 'src/templates'
    const templates = {
      blog: path.resolve(`${templatesFolder}/post.js`),
      github: path.resolve(`${templatesFolder}/github.js`),
      game: path.resolve(`${templatesFolder}/game.js`),
      about: path.resolve(`${templatesFolder}/about.js`)
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
      if (result.errors) {
        console.log(result.errors)
      }

      const template = (type) => {
        if (!type) type = 'blog'
        return slash(templates[type])
      }

      // Create blog posts pages.
      result.data.allOrgContent.edges.forEach(({ node }) => {
        let path = node.meta.slug
        if (!path) path = node.fields.path
        if (path.startsWith('/projects/')) path += 'play/'
        createPage({
          path: path,
          component: template(node.meta.type),
          context: {
            slug:  node.fields.slug,
          },
        })
      })

      result.data.allRepositories.edges.forEach(({ node }) => {
        const repo = node
        createPage({
          path: `/projects/${repo.name}`,
          component: template('github'),
          context: {
            repo: repo.name,
          },
        })
      })

      resolve()
    })
  })
}

// Add custom url pathname for blog posts.
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
      value: fileNode.fields.slug,
    })
  }
}
