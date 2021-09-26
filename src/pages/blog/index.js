import React from 'react'
import { useMarkdown, Markdown, summary } from 'components/markdown'
import Title from 'components/title'
import Link from 'link'
import { getMarkdownFiles } from 'data/local'

const Post = ({ post }) => {
  const { content, meta } = useMarkdown(post.content, { filters: [summary] })
  const continueReading = 'Continue reading'
  const title = meta.title
  const slug = `/blog/${post.post}`
  const date = new Date(meta.date)
  const formatter = new Intl.DateTimeFormat('en' , { dateStyle: 'long' })
  return (
    <div>
      <h1>
        <Link href={slug}>{title}</Link>
      </h1>
        {date && <div>{formatter.format(date)}</div> }
      <div>
        <Markdown content={content} />
      </div>
      <Link
        href={slug}
        aria-label={`${continueReading} ${title}`}
      >
        {continueReading} . . .
      </Link>
    </div>
  )
}

const Blog = ({ data }) => {
  const getDate = post => post.metadata && post.metadata.date
  const posts = data.sort((a, b) => {
    const compare = (a, b, f) =>
      (a || b) ? (!a ? 1 : !b ? -1 : f(a, b) ? 1 : -1) : 0
    return compare(getDate(a), getDate(b), (a, b) => new Date(a) < new Date(b))
  }).map(post => {
    const date = new Date(getDate(post))
    post.date = undefined
    if (!isNaN(date.getTime())) post.date = date
    return post
  })
  return (
    <>
      <Title paddingX="0">Posts</Title>
      {posts.map(post => <Post key={`post-preview-${post.post}`} post={post} />)}
    </>
  )
}

export const getStaticProps = () => {
  return { props: { data: getMarkdownFiles('content/blog')  } }
}

export default Blog
