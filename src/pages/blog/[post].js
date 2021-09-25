import React from 'react'
import path from 'path'
import fs from 'fs-extra'
import Org from 'components/org'
import { Markdown, removeBadges } from 'components/markdown'

const Post = ({ post }) => {
  return (
    <>
      <div>
        <Markdown content={post.content} />
      </div>
    </>
  )
}

export const getStaticProps = async ({ params, ...rest }) => {
  const { post } = params
  const getPost = () => {
    const filePath = path.join('./content/blog', `${post}.md`)
    const { ext, name } = path.parse(filePath)
    if (ext.startsWith('.md')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8')
        const post = {
          content,
          date: '',
          post: filePath
            .replace(/^content\/blog\//, '')
            .replace(/.md?$/, '')
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
  const files = fs.readdirSync('./content/blog').map(name => name.replace(/.md?$/, ''))
  return {
    paths: files.map(post => ({ params: { post } })),
    fallback: false
  }
}

export default Post
