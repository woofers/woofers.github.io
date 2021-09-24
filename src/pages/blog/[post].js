import React from 'react'
import path from 'path'
import fs from 'fs-extra'
import Org from 'components/org'

const Post = ({ post }) => {
  return (
    <>
      <div>
        <Org content={post.content} />
      </div>
    </>
  )
}

export const getStaticProps = async ({ params, ...rest }) => {
  const { post } = params
  const getPost = () => {
    const filePath = path.join('./content/blog', `${post}.org`)
    const { ext, name } = path.parse(filePath)
    if (ext.startsWith('.org')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8')
        const post = {
          content,
          date: '',
          post: filePath
            .replace(/^content\/blog\//, '')
            .replace(/.org?$/, '')
        }
        return post
      }
      catch (e) {
        console.log(e)
        return {}
      }
    }
  }
  return { props: { post: getPost()  } }
}

export const getStaticPaths = () => {
  const files = fs.readdirSync('./content/blog').map(name => name.replace(/.org?$/, ''))
  return {
    paths: files.map(post => ({ params: { post } })),
    fallback: false
  }
}

export default Post
