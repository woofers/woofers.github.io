import React from 'react'
import Org from 'components/org'
import { Markdown, removeBadges } from 'components/markdown'
import { getMarkdownFile, getMarkdownFileNames } from 'data/local'

const Post = ({ post }) => {
  return (
    <>
      <Markdown content={post.content} />
    </>
  )
}

export const getStaticProps = ({ params, ...rest }) => {
  const { post } = params
  return { props: { post: getMarkdownFile('content/blog', post)  } }
}

export const getStaticPaths = () => {
  const files = getMarkdownFileNames('content/blog')
  return {
    paths: files.map(post => ({ params: { post } })),
    fallback: false
  }
}

export default Post
