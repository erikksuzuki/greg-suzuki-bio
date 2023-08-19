export enum AssetState {
  Hidden,
  Informational,
  ComingSoon,
  Primary,
  Secondary,
  OfferPending,
  OfferAccepted,
  Unavailable,
}

interface AssetResourceDetails {
  title: string
  medium: string
  description: string
  created_at?: string | null
}

interface AssetResourcePrimary {
  series: string
  start_at: string
  end_at?: string | null
  supply: number
  supply_sold: number
  price_per_unit: number
  min_units: number
  max_units: number
}

type Dimensions = [x: number, y: number, z?: number]

interface AssetResourceTextures {
  diffuse: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AssetResourceSecondary {}

export interface AssetResource {
  slug: string
  collection_slug: string
  artist_slugs: string[]
  state: AssetState
  tags: string[]
  contract_address: string
  details: AssetResourceDetails
  released_at?: string
  featured_at?: string
  primary?: AssetResourcePrimary | null
  secondary?: AssetResourceSecondary | null
  dimensions: Dimensions
  textures: AssetResourceTextures
}

const buildAssetResource = (assets?: AssetResource[]): AssetResource[] =>
  assets ?? []

export { buildAssetResource }
