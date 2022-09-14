import Page from 'components/page'
import React from 'react'
import Markdown from 'components/markdown'
import { getMarkdownFile, getMarkdownFileNames } from 'data/local'

const Post = ({ post, title }) => {
  return (
    <Page title={title}>
      <Markdown content={post.content} />
    </Page>
  )
}

export const getStaticProps = ({ params }) => {
  const { post } = params
  const content = getMarkdownFile('content/blog', post)
  return { props: { post: content, title: content.meta?.title || '' } }
}

export const getStaticPaths = () => {
  const files = getMarkdownFileNames('content/blog')
  return {
    paths: files.map(post => ({ params: { post } })),
    fallback: false
  }
}

export default Post
