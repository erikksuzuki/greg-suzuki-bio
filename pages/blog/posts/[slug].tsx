import { NextSeo } from 'next-seo'

import {
  getAllPosts,
  getPostBySlug,
  getPreviewPostBySlug,
} from '../../../lib/clients/contentful/posts'
import { Post } from '../../../components/blog/Post'

type BlogPostPage = {
  post: any
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()
  return {
    paths: posts.map((post) => ({
      params: { slug: post.fields.slug },
    })),
    fallback: 'blocking',
  }
}

// NOTE: See https://nextjs.org/docs/advanced-features/preview-mode for more info
// on context.preview
export const getStaticProps = async (context: any) => {
  const preview = context.preview || false
  const post = preview
    ? await getPreviewPostBySlug(context.params.slug)
    : await getPostBySlug(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return { props: { post } }
}

const Index = ({ post }: BlogPostPage) => {
  return (
    <>
      <NextSeo
        title={post.fields.title}
        nofollow={!post.fields.discoverable}
        noindex={!post.fields.discoverable}
      />
      <div className="px-4 md:px-8">
        <div className="container mx-auto max-w-screen-xl">
          <Post {...post} />
        </div>
      </div>
    </>
  )
}

export default Index
