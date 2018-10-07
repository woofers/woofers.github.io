const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage, createRedirect } = boundActionCreators

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/projects/`,
  })

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
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
        if (!path) path = node.fields.slug
        createPage({
          path: path,
          component: slash(blogPostTemplate),
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
