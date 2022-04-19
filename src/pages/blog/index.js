import Page from 'components/page'
import React from 'react'
import { useMarkdown, Markdown, summary } from 'components/markdown'
import Title from 'components/title'
import Link from 'link'
import { getMarkdownFiles } from 'data/local'
import { styled, Box, Flex, Typography } from 'ruffsponsive'

const Post = ({ post }) => {
  const { content, meta } = useMarkdown(post.content, { filters: [summary] })
  const continueReading = 'Continue reading'
  const title = meta.title
  const slug = `/blog/${post.post}`
  const date = new Date(meta.date)
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'long' })
  return (
    <Flex direction="column" css={{ gap: '12px 0' }}>
      <Link href={slug}>
        <Typography as="h2" type="h4">
          {title}
        </Typography>
      </Link>
      {date && (
        <Typography as="time" datetime={date.toISOString()} type="button">
          {formatter.format(date)}
        </Typography>
      )}
      <Markdown content={content} />
      <Link href={slug} aria-label={`${continueReading} ${title}`}>
        <Typography type="button" as="span">
          {continueReading} . . .
        </Typography>
      </Link>
    </Flex>
  )
}

const Blog = ({ data }) => {
  const getDate = post => post.metadata && post.metadata.date
  const posts = data
    .sort((a, b) => {
      const compare = (a, b, f) =>
        a || b ? (!a ? 1 : !b ? -1 : f(a, b) ? 1 : -1) : 0
      return compare(
        getDate(a),
        getDate(b),
        (a, b) => new Date(a) < new Date(b)
      )
    })
    .map(post => {
      const date = new Date(getDate(post))
      post.date = undefined
      if (!isNaN(date.getTime())) post.date = date
      return post
    })
  return (
    <Page title="Blog">
      <Flex direction="column" css={{ gap: '28px 0', pt: '$6' }}>
        <Typography as="h1" type="h2" noMargin>
          Posts
        </Typography>
        <Flex direction="column" css={{ gap: '28px 0', pt: '$2' }}>
          {posts.map(post => (
            <Post key={`post-preview-${post.post}`} post={post} />
          ))}
        </Flex>
      </Flex>
    </Page>
  )
}

export const getStaticProps = () => {
  return { props: { data: getMarkdownFiles('content/blog') } }
}

export default Blog
