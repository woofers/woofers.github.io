import React from 'react'
import { Markdown } from 'components/markdown'
import Title from 'components/title'
import Link from 'link'
import { getMarkdownFiles } from 'data/local'

const Blog = ({ content }) => {
  const formatter = new Intl.DateTimeFormat('en' , { dateStyle: 'long' })
  const getDate = post => post.metadata && post.metadata.date
  const posts = content.sort((a, b) => {
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
      <Title>Posts</Title>
      {
        posts.map(post => {
          const continueReading = 'Continue reading'
          const title = 'Woof'
          const slug = `/blog/${post.post}`
          const date = false
          return (
            <div key={`post-preview-${title}`}>
              <h1>
                <Link href={slug}>{title}</Link>
              </h1>
                {date && <div>{formatter.format(date)}</div> }
              <div>
                <Markdown content={post.content} />
              </div>
              <Link
                href={slug}
                aria-label={`${continueReading} ${title}`}
              >
                {continueReading} . . .
              </Link>
            </div>
          )
        })

      }
    </>
  )
}

export const getStaticProps = () => {
  return { props: { content: getMarkdownFiles('content/blog')  } }
}

export default Blog
