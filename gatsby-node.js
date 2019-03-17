const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/projects/`,
  })

  return new Promise((resolve, reject) => {
    const templatesFolder = 'src/templates'
    const templates = {
      blog: path.resolve(`${templatesFolder}/post.js`),
      page: path.resolve(`${templatesFolder}/page.js`),
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
                  slug
                  type
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      // Create blog posts pages.
      result.data.allOrgContent.edges.forEach(edge => {
        const node = edge.node
        let path = node.meta.slug
        const template = (type) => {
          if (!type) type = 'blog'
          return slash(templates[type])
        }
        if (!path) path = node.fields.path
        createPage({
          path: path,
          component: template(node.meta.type),
          context: {
            slug:  node.fields.slug,
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
