import { Box } from '@jaxson/ui/box'
import { GutterContent, GutterWrapper } from 'components/gutter-content'
import { MdxWithTableOfContents } from 'components/mdx-components'
import { SlideLink } from 'components/slide-button'
import { ViewTransition } from 'components/view-transition'
import { allPosts } from 'content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getMetadata,
  parseAndFormatDate,
  parseAndFormatDateAsShort
} from 'utils'
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

export const generateViewport = ({ params: _ }: PostProps) => getViewport()

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
    <GutterWrapper>
      <MdxWithTableOfContents code={post.body.code}>
        <ViewTransition
          name={post.slugAsParams}
          template={name => `blog-title-${name}`}
          default="none"
          share="slide-in"
          enter="none"
        >
          <SlideLink
            href="/"
            altLabel={'<-- Back'}
            ariaLabel="Back to homepage"
            marginBottom="$400"
          >
            {post.title}
          </SlideLink>
        </ViewTransition>
        {post.date && (
          <Box
            display="block"
            as="time"
            fontSize="15px"
            fontWeight="medium"
            color="$textPrimary"
            pb="$200"
            dateTime={post.date}
            title={parseAndFormatDate(post.date)}
          >
            {parseAndFormatDateAsShort(post.date)}
          </Box>
        )}
      </MdxWithTableOfContents>
      <GutterContent />
    </GutterWrapper>
  )
}

export default PostPage
