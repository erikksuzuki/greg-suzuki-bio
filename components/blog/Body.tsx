import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import {
  ContentfulFontSize,
  renderContentfulDocument,
} from '../../lib/clients/contentful/document'
import { PostImage } from './Post'

export type BodyProps = {
  body: string
  truncate?: boolean
  postHeroImage?: PostImage
}

const truncatedBody = (body: any, limit = 200) => {
  const content = documentToPlainTextString(body)
  const truncatedContent = content
    .split(' ')
    .reduce((content: any, word: any) => {
      if (content.length + word.length < limit) {
        return content + ' ' + word
      } else {
        return content
      }
    })

  return truncatedContent + '…'
}

const Body = ({ body, truncate, postHeroImage }: BodyProps) => {
  const content = truncate
    ? truncatedBody(body)
    : renderContentfulDocument(body, ContentfulFontSize.Blog, postHeroImage)
  return (
    <section className="post-content mx-auto max-w-[720px] text-biography-gray-600">
      {content}
    </section>
  )
}

export { Body }
