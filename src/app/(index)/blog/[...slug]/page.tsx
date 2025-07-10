import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allPosts } from 'content'
import { Mdx } from 'components/mdx-components'
import { Divider, Text } from 'components/styled'
import { getMetadata, parseAndFormatDate } from 'utils'
import Subtitle from 'components/subtitle'
import Title from 'components/title'
import ContentContainer from 'components/content-container'
import { getViewport } from 'utils/metadata'

type PostProps = {
  params: Promise<{
    slug: string[]
  }>
}

const getPostFromParams = async (params: Awaited<PostProps['params']>) => {
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
  const data = await params
  const post = await getPostFromParams(data)

  if (!post) {
    return {}
  }

  return getMetadata({ title: post.title })
}

export const generateViewport = ({ params }: PostProps) => getViewport()

export const generateStaticParams = async (): Promise<
  Awaited<PostProps['params']>[]
> => {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split('/')
  }))
}

const PostPage = async ({ params }: PostProps) => {
  const data = await params
  const post = await getPostFromParams(data)

  if (!post) {
    notFound()
  }

  return (
    <ContentContainer back="/">
      <Title className="text-morph">{post.title}</Title>
      {post.date && <Subtitle>{parseAndFormatDate(post.date)}</Subtitle>}
      <Divider />
      <Mdx code={post.body.code} />
    </ContentContainer>
  )
}

export default PostPage
