import { PostLink } from '../../../components/blog/Link'
import { PaginationSection } from '../../../components/blog/Pagination'
import { PostProps } from '../../../components/blog/Post'
import { PageHeader } from '../../../components/layout/PageHeader'
import { getAllPosts } from '../../../lib/clients/contentful/posts'
import { NextSeo } from 'next-seo'

type BlogPaginatedPage = {
  posts: PostProps[]
  pageCount: number
  pageNumber: number
}

// Change the number of blog posts per page here
const pageSize = 6

export const getStaticPaths = async () => {
  const posts = await getAllPosts()
  const pagesTotal = Math.ceil(posts.length / pageSize)
  const pageNumberArray = Array.from({ length: pagesTotal }, (i, o) => {
    return { params: { pageNumber: (o + 1).toString() } }
  })
  return { paths: pageNumberArray, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts.slice(
        (Number(context.params.pageNumber) - 1) * pageSize,
        Number(context.params.pageNumber) * pageSize
      ),
      pageCount: Math.ceil(allPosts.length / pageSize),
      pageNumber: Number(context.params.pageNumber),
    },
  }
}

const Index = ({ posts, pageCount, pageNumber = 1 }: BlogPaginatedPage) => {
  return (
    <>
      <NextSeo title="Blog" />
      <PageHeader
        topText="Reading"
        title="Our Blog"
        supportingText="Articles to feed your head"
      />
      <section className="px-4 sm:px-8 mx-auto max-w-screen-xl">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostLink {...post} key={post.fields.title} />
          ))}
        </ul>
      </section>
      <section className="px-4 sm:px-8 mx-auto w-full max-w-screen-xl pt-16">
        <PaginationSection
          pageCount={pageCount}
          currentPage={pageNumber}
          urlPrefix="/blog/page/"
        />
      </section>
    </>
  )
}

export default Index
