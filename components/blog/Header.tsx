import { formatDate } from '../../lib/helpers/formatDate'
import Image from 'next/image'
import { PostImage } from './Post'
import { TagGroup } from './TagGroup'

export type HeaderProps = {
  title: string
  subtitle?: string
  createdAt: string
  publishedAt?: string
  postHeroImage?: PostImage
  postTruncate?: boolean
  postTags?: any
}

const PostHeroImage = (postImage: PostImage) => {
  const tallImage = postImage.height / postImage.width > 0.425
  const thumbnailHeight = (1280 / postImage.width) * postImage.height
  const thumbnailDimensions = tallImage ? 'w-full h-auto' : 'w-auto h-full'
  return (
    <div className="mt-16 relative bg-gray-200 flex justify-center items-center overflow-hidden h-56 md:h-96 lg:h-[560px]">
      <Image
        className={`absolute max-w-none ${thumbnailDimensions}`}
        src={`https:${postImage.src}`}
        alt={`${postImage.alt}`}
        width={1280}
        height={thumbnailHeight}
      />
    </div>
  )
}

const Header = ({
  title,
  subtitle,
  createdAt,
  publishedAt,
  postHeroImage,
  postTruncate,
  postTags,
}: HeaderProps) => {
  const postedAt = publishedAt || createdAt
  return (
    <header className="py-24">
      <p className="text-lazarus-sm md:text-lazarus-md font-semibold text-lazarus-primary-600 text-center mb-3">
        Published <time dateTime={postedAt}>{formatDate(postedAt, true)}</time>
      </p>
      <h1 className="text-lazarus-display-md md:text-lazarus-display-lg tracking-lazarus-lg font-semibold max-w-4xl text-center mx-auto mb-6 ">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-lazarus-lg md:text-lazarus-xl font-normal text-lazarus-gray-600 text-center">
          {subtitle}
        </h2>
      )}
      <div className="flex justify-center mt-10">
        <TagGroup postTags={postTags} />
      </div>
      {postHeroImage && !postTruncate && <PostHeroImage {...postHeroImage} />}
    </header>
  )
}

export { Header }
