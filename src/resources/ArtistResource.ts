export interface ArtistResource {
  slug: string
  name: string
  bio?: string
  born_at?: string
  died_at?: string
  born_city?: string
  born_country?: string
  nationality?: string
}

const buildArtistResource = (artists?: ArtistResource[]): ArtistResource[] =>
  artists ?? []

export { buildArtistResource }
