const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const templatesFolder = 'src/templates'
    const templates = {
      blog: path.resolve(`${templatesFolder}/post.js`),
      page: path.resolve(`${templatesFolder}/page.js`),
      game: path.resolve(`${templatesFolder}/game.js`)
    }
    graphql(
      `
        {
          allOrga(
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                meta
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
      result.data.allOrga.edges.forEach(edge => {
        const node = edge.node
        let path = node.meta.slug
        const template = (type) => {
          if (!type) type = 'blog'
          return slash(templates[type])
        }
        if (!path) path = node.fields.slug
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
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `File`) {
    const folder = node.relativeDirectory
    const fileName = path.parse(node.absolutePath).name
    const slug = `/${path.join(folder, fileName)}/`
    createNodeField({ node, name: `slug`, value: slug })
  } else if (
    node.internal.type === `Orga` &&
      typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug,
    })

  }
}
