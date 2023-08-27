import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { PostImage } from '../../../components/blog/Post'

export enum ContentfulFontSize {
  Small = 'text-sm',
  Base = 'text-base',
  Blog = 'text-biography-lg font-normal',
  Large = 'text-lg',
  XLarge = 'text-xl',
}

const leading = (fontSize: ContentfulFontSize) => {
  if (fontSize === ContentfulFontSize.Small) return 'leading-6'
  if (fontSize === ContentfulFontSize.Base) return 'leading-6'
  if (fontSize === ContentfulFontSize.Blog) return ''
  if (fontSize === ContentfulFontSize.Large) return 'leading-6'
  if (fontSize === ContentfulFontSize.XLarge) return 'leading-8'
}

const paragraphMargins = (fontSize: ContentfulFontSize) => {
  if (fontSize === ContentfulFontSize.Blog) return 'mb-4'
  return 'mb-8'
}

const customMarkdownOptions = (
  _content: any,
  baseFontSize: ContentfulFontSize,
  postHeroImage?: PostImage
) => ({
  renderMark: {
    [MARKS.BOLD]: (text: any) => (
      <strong className="font-semibold">{text}</strong>
    ),
    [MARKS.UNDERLINE]: (text: any) => <span className="underline">{text}</span>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => <code className="code">{text}</code>,
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-biography-display-xs text-biography-gray-900 mt-8 mb-4 font-semibold">
        {children}
      </h2>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p
        className={`${baseFontSize} ${leading(baseFontSize)} ${paragraphMargins(
          baseFontSize
        )} whitespace-break-spaces`}
      >
        {children}
      </p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any, _children: any) => {
      // THIS IS A HACK SO THAT HEADER IMAGES IN BLOG POSTS DON'T END UP IN THE POST BODY
      if (postHeroImage?.src === node.data.target.fields.file.url) return null
      // THIS IS A HACK SO THAT HEADER IMAGES IN BLOG POSTS DON'T END UP IN THE POST BODY
      return (
        <img
          className="my-12 rounded-lg w-full"
          src={`${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.file.fileName}
        />
      )
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal my-8 pl-4">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc my-8 pl-4">{children}</ul>
    ),
  },
})

const renderContentfulDocument = (
  body: any,
  baseFontSize = ContentfulFontSize.XLarge,
  postHeroImage?: PostImage
) => {
  return documentToReactComponents(
    body,
    customMarkdownOptions(body, baseFontSize, postHeroImage)
  )
}

export { renderContentfulDocument }
