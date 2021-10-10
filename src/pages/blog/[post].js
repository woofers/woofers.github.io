import Page from 'components/page'
import React from 'react'
import Container from 'components/container'
import Title from 'components/title'
import { useMarkdown, Markdown } from 'components/markdown'
import { getMarkdownFile, getMarkdownFileNames } from 'data/local'

const Post = ({ post }) => {
  const { content, meta } = useMarkdown(post.content)
  return (
    <Page title={meta.title}>
      <Title>{meta.title}</Title>
      <Markdown content={content} />
    </Page>
  )
}

export const getStaticProps = ({ params, ...rest }) => {
  const { post } = params
  return { props: { post: getMarkdownFile('content/blog', post) } }
}

export const getStaticPaths = () => {
  const files = getMarkdownFileNames('content/blog')
  return {
    paths: files.map(post => ({ params: { post } })),
    fallback: false,
  }
}

export default Post
