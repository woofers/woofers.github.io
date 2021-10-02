import React from 'react'
import Container from 'components/container'
import Title from 'components/title'
import { useMarkdown, Markdown } from 'components/markdown'
import { getMarkdownFile, getMarkdownFileNames } from 'data/local'

const Post = ({ post }) => {
  const { content, meta } = useMarkdown(post.content)
  return (
    <Container>
      <Title paddingX="0">{meta.title}</Title>
      <Markdown content={content} />
    </Container>
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
