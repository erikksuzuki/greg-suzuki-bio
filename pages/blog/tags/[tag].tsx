import { PageHeader } from '../../../components/layout/PageHeader'
import {
  getAllPosts,
  getPostsByTag,
} from '../../../lib/clients/contentful/posts'
import { NextSeo } from 'next-seo'
import { PostLink } from '../../../components/blog/Link'
import { PostProps } from '../../../components/blog/Post'

type BlogTagsPage = {
  posts: any[]
  tag: string
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()

  const data = {
    paths: Object.values(
      posts.reduce<Record<string, { params: { tag: string } }>>(
        (tags, post: PostProps) => {
          post.metadata.tags.length &&
            post.metadata.tags.forEach((tag: any) => {
              tags[tag.sys.id] = {
                params: { tag: tag.sys.id },
              }
            })

          return tags
        },
        {}
      )
    ),

    fallback: false,
  }

  return data
}

export const getStaticProps = async (context: any) => {
  const posts = await getPostsByTag(context.params.tag)

  return { props: { posts, tag: context.params.tag } }
}

const Index = ({ posts, tag = 'Unknown' }: BlogTagsPage) => {
  return (
    <>
      <NextSeo title={`${tag} Posts`} />
      <PageHeader
        topText="Our Blog"
        title={`#${tag} Posts`}
        supportingText="The latest industry news, interviews, technologies, and resources"
      />
      <section className="px-8 mx-auto max-w-screen-xl">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostLink {...post} key={post.fields.title} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Index
