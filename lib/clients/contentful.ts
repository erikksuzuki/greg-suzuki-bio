import { createClient } from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || ''
const CONTENTFUL_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ''
const CONTENTFUL_ENVIRONMENT =
  process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'prod'
const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN || ''

const buildClient = (
  { preview }: { preview?: boolean } = { preview: false }
) => {
  // NOTE: Preview client is used to allow Contentful editors to preview content
  // before it's public.
  if (preview) {
    return createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: 'preview.contentful.com',
    })
  }

  return createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: CONTENTFUL_ENVIRONMENT,
  })
}

const imageAssetDetails = (asset: any) => {
  return {
    url: asset.fields.file.url,
    width: asset.fields.file.details.image.width,
    height: asset.fields.file.details.image.height,
    type: asset.fields.file.contentType,
  }
}

export { buildClient, imageAssetDetails }
