import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allPosts } from 'content'
import { Mdx } from 'components/mdx-components'
import { Divider, Text } from 'components/styled'
import { getMetadata, parseAndFormatDate } from 'utils'
import Subtitle from 'components/subtitle'
import Title from 'components/title'
import ContentContainer from 'components/content-container'

type PostProps = {
  params: {
    slug: string[]
  }
}

const getPostFromParams = async (params: PostProps['params']) => {
  const slug = params?.slug?.join('/')
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return post
}

export const generateMetadata = async ({
  params
}: PostProps): Promise<Metadata> => {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return getMetadata({ title: post.title })
}

export const generateStaticParams = async (): Promise<
  PostProps['params'][]
> => {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split('/')
  }))
}

const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <ContentContainer back="/">
      <Title>{post.title}</Title>
      {post.date && <Subtitle>{parseAndFormatDate(post.date)}</Subtitle>}
      <Divider />
      <Mdx code={post.body.code} />
    </ContentContainer>
  )
}

export default PostPage
