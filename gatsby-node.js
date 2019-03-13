const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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
