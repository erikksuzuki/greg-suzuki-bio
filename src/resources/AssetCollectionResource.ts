export interface AssetCollectionResource {
  // id: string // TODO: Do we need / want UUID id?
  slug: string
  title: string
  subtitle?: string
  description: string
}

const buildAssetCollectionResource = (
  collection: AssetCollectionResource
): AssetCollectionResource => {
  return {
    slug: collection.slug,
    title: collection.title,
    subtitle: collection.subtitle,
    description: collection.description,
  }
}

export { buildAssetCollectionResource }
