import { buildClient } from '../../../lib/clients/contentful'

const getAllAssets = async () => {
  const client = buildClient()

  const assets = await client.getEntries({
    content_type: 'asset',
  })

  return assets.items
}

const getAssetBySlug = async (slug: string) => {
  const client = buildClient()

  const asset = await client.getEntries({
    content_type: 'asset',
    'fields.slug': slug,
  })

  return asset.items[0]
}

export { getAllAssets, getAssetBySlug }
