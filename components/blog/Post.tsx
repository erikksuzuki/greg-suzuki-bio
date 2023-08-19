import { EntrySys, Metadata } from 'contentful'
import { AvatarLabelGroup } from '../avatars/AvatarLabelGroup'

import { Body } from './Body'
import { Header } from './Header'

export interface FileProps {
  contentType?: string
  details?: {
    image?: {
      height?: number
      width?: number
    }
    size?: number
  }
  fileName?: string
  url?: string
}
export interface AvatarProps {
  fields: {
    description?: string
    file?: FileProps
    title?: string
  }
  metadata: Metadata
  sys: EntrySys
}
export interface AuthorProps {
  fields: {
    avatar?: AvatarProps
    name?: string
    slug?: string
    startedAt?: string
    title?: any
    twitterUrl?: string
  }
  subtext?: string
  className?: string
  metadata: Metadata
  sys: EntrySys
}

export interface PostProps {
  fields: {
    title?: string
    subtitle?: string
    slug?: string
    author: AuthorProps
    content?: any
    headerImage?: any
    publishedAt?: string
  }
  sys: EntrySys
  metadata: Metadata
  truncate?: boolean
  showTags?: boolean
}

export interface PostImage {
  src: string
  alt: string
  width: number
  height: number
}

export const findHeaderImage = (post: PostProps): PostImage => {
  const firstEmbededImage = post.fields.content.content.find(
    (node: any) => node.nodeType === 'embedded-asset-block'
  )
  if (post.fields.headerImage?.fields.file.url) {
    return {
      src: post.fields.headerImage?.fields.file.url,
      alt: post.fields.headerImage?.fields.file.fileName,
      width: post.fields.headerImage?.fields.file.details.image.width,
      height: post.fields.headerImage?.fields.file.details.image.height,
    }
  } else if (firstEmbededImage) {
    return {
      src: firstEmbededImage.data.target.fields.file.url,
      alt: firstEmbededImage.data.target.fields.file.fileName,
      width: firstEmbededImage.data.target.fields.file.details.image.width,
      height: firstEmbededImage.data.target.fields.file.details.image.height,
    }
  } else {
    return { src: '', alt: '', width: 0, height: 0 }
  }
}
const Post = (post: PostProps) => {
  const avatarUrl: string | undefined =
    post.fields.author.fields.avatar &&
    `https:${post.fields.author.fields.avatar.fields.file?.url}`
  return (
    <article className="post mx-auto">
      {/* Nullish operators "??" are for fields that should have data present however due to issue with Contenful types the fields are optional when passed in. */}
      <Header
        title={post.fields.title ?? ''}
        subtitle={post.fields.subtitle}
        createdAt={post.sys.createdAt}
        publishedAt={post.fields.publishedAt}
        postHeroImage={findHeaderImage(post)}
        postTruncate={post.truncate}
        postTags={post.metadata.tags}
      />
      <Body
        body={post.fields.content ?? ''}
        truncate={post.truncate}
        postHeroImage={findHeaderImage(post)}
      />
      <div className="border-t my-6 py-6 mx-auto max-w-3xl text-lazarus-gray-600">
        <AvatarLabelGroup
          avatarUrl={avatarUrl}
          text={post.fields.author.fields?.name}
          supportingText={post.fields.author.fields?.title}
        />
      </div>
    </article>
  )
}

export { Post }
