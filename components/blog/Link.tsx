import { LinkArrowSmall } from '../../components/icons/LinkArrowSmall'
import { formatDate } from '../../lib/helpers/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import { AvatarLabelGroup } from '../avatars/AvatarLabelGroup'
import { Body } from './Body'
import { findHeaderImage, PostImage, PostProps } from './Post'
import { customTagColors, postTag, randomTagColor } from './TagGroup'

const PostThumbnail = (postImage: PostImage) => {
  return (
    <div
      className="relative flex items-center bg-gray-200 mb-8 shadow-2xl overflow-hidden"
      style={{ aspectRatio: `768 / 480` }}
    >
      <Image
        fill
        src={`https:${postImage.src}`}
        alt={`${postImage.alt}`}
        className="object-cover"
      />
    </div>
  )
}

const CategoryLabels = ({ postTags }: { postTags: postTag[] }) => {
  // For current purposes, TAGS are used in place of Categories
  // You can define the color of specific post tags in the ./TagGroup.tsx component

  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN)
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT)
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN)

  const labelColor: any = {
    gray: 'text-biography-gray-700',
    primary: 'text-biography-primary-700',
    error: 'text-biography-error-700',
    pink: 'text-biography-pink-700',
    orange: 'text-biography-orange-700',
    green: 'text-biography-success-700',
    indigo: 'text-biography-indigo-700',
  }
  return (
    <div className="mb-3 text-biography-sm font-semibold capitalize">
      {postTags.map((tag: postTag, index: number) => {
        const color = customTagColors[tag.sys.id] ?? randomTagColor()
        const comma = index !== postTags.length - 1 ? ', ' : ''
        return (
          <span key={tag.sys.id} className={`${labelColor[color]}`}>
            {tag.sys.id}
            {comma}
          </span>
        )
      })}
      {/* IF TAGS DON'T EXIST */}
      {!postTags.length && (
        <span className={`${labelColor['primary']}`}>article</span>
      )}
    </div>
  )
}

const PostLink = (post: PostProps) => {
  const postedAt = post.fields.publishedAt
  const avatarUrl =
    post.fields.author.fields.avatar &&
    `https:${post.fields.author.fields.avatar.fields.file?.url}`
  return (
    <li className="mb-16 flex flex-col grow-1 justify-between">
      <section>
        <Link href={`/blog/posts/${post.fields.slug}`}>
          <div className="cursor-pointer">
            <PostThumbnail {...findHeaderImage(post)} />
            <CategoryLabels postTags={post.metadata.tags} />
            <div className="relative mb-2">
              <h1 className="text-biography-display-xs font-semibold mr-10">
                {post.fields.title}
              </h1>
              <LinkArrowSmall className="w-5 h-5 absolute top-2 right-1" />
            </div>

            <Body body={post.fields.content ?? ''} truncate={true} />
          </div>
        </Link>
      </section>
      <section className="pt-6">
        <AvatarLabelGroup
          avatarUrl={avatarUrl}
          text={post.fields.author.fields?.name ?? 'biography'}
          supportingText={postedAt ? formatDate(postedAt, true) : ''}
        />
      </section>
    </li>
  )
}

export { PostLink }
