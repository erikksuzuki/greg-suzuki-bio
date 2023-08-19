import { AssetCollectionResource } from '../../src/resources/AssetCollectionResource'
import { AssetResource, AssetState } from '../../src/resources/AssetResource'

const WarholCollection: AssetResource[] = [
  {
    slug: 'warhol-001-marilyn',
    collection_slug: 'warhol-001',
    state: AssetState.Primary,
    tags: ['pop-art'],
    contract_address: '0x0000000000000000000000000000000000000000',
    details: {
      title: 'Marilyn',
      medium: 'Screenprint on paper',
      description:
        'Perhaps the most famous and recognizable subject of Andy Warhol’s works, this classically elegant Marilyn is a 36”x36” screen print that was signed by the artist in pencil and stamped with edition #81/250 on the reverse. It was sourced from the collection of legendary Warhol superstar, Jane Holzer.',
      created_at: '1967',
    },
    primary: {
      series: 'Warhol AWMARILYN',
      // TODO: We'll eventually pull this data from North Capital
      start_at: '2023-04-15T00:00:00Z',
      // end_at: undefined,
      supply: 10_000,
      supply_sold: 0,
      price_per_unit: 53.18,
      min_units: 10,
      max_units: 2_000,
    },
    dimensions: [0.915, 0.915],
    artist_slugs: ['andy-warhol'],
    textures: {
      diffuse: '/images/assets/warhol-001-marilyn.jpg',
    },
  },
  {
    slug: 'warhol-001-mick-jagger',
    collection_slug: 'warhol-001',
    state: AssetState.Primary,
    tags: ['pop-art'],
    contract_address: '0x0000000000000000000000000000000000000000',
    details: {
      title: 'Mick Jagger',
      medium: 'Screenprint on paper',
      description:
        ' This Mick Jagger is a 43 ½” x 29” screen print on Arches Aquarelle paper, with exceptionally strong signatures by both Andy Warhol on the lower right and by the iconic Mick Jagger on the lower left. It is an unusually rare unique limited edition separate from the original 250, with the words “Merry Christmas Bob Dennison” written on the reverse. It was gifted directly from Bob Dennison to Jane Holzer, from whom it was sourced.',
      created_at: '1975',
    },
    primary: {
      series: 'Warhol AWJAGGER',
      // TODO: We'll eventually pull this data from North Capital
      start_at: '2023-04-15T00:00:00Z',
      // end_at: undefined,
      supply: 10_000,
      supply_sold: 0,
      price_per_unit: 22.63,
      min_units: 10,
      max_units: 2_000,
    },
    dimensions: [0.737, 1.092],
    artist_slugs: ['andy-warhol'],
    textures: {
      diffuse: '/images/assets/warhol-001-mick-jagger.jpg',
    },
  },
  {
    slug: 'warhol-001-rebel-without-a-cause',
    collection_slug: 'warhol-001',
    state: AssetState.Primary,
    tags: ['pop-art'],
    contract_address: '0x0000000000000000000000000000000000000000',
    details: {
      title: 'Rebel Without a Cause',
      medium: 'Screenprint on paper',
      description:
        'Part of Warhol’s “Advertisements” series, this James Dean is a 36”x36” screen print that was signed by the artist in pencil and stamped with edition #86/190 on the reverse. Sourced from the collection of legendary Warhol superstar, Jane Holzer.',
      created_at: '1985',
    },
    primary: {
      series: 'Warhol AWDEAN',
      // TODO: We'll eventually pull this data from North Capital
      start_at: '2023-04-15T00:00:00Z',
      // end_at: undefined,
      supply: 10_000,
      supply_sold: 0,
      price_per_unit: 19.85,
      min_units: 10,
      max_units: 2_000,
    },
    dimensions: [0.965, 0.965],
    artist_slugs: ['andy-warhol'],
    textures: {
      diffuse: '/images/assets/warhol-001-rebel-without-a-cause.jpg',
    },
  },
  {
    slug: 'warhol-001-double-mickey',
    collection_slug: 'warhol-001',
    state: AssetState.Primary,
    tags: ['pop-art'],
    contract_address: '0x0000000000000000000000000000000000000000',
    details: {
      title: 'Double Mickey',
      medium: 'Screenprint on paper with diamond dust',
      description:
        'Double Mickey is an exceedingly rare 30 ½” x 43” screen print in color with scintillating diamond dust on Arches 88 paper. Number 3 of 25 ever produced, with each print in the series presenting uniquely based on its colorway. Signed and numbered on the reverse. Sourced from the collection of legendary Warhol superstar, Jane Holzer.',
      created_at: '1981',
    },
    primary: {
      series: 'Warhol AWMICKEY',
      // TODO: We'll eventually pull this data from North Capital
      start_at: '2023-04-15T00:00:00Z',
      // end_at: undefined,
      supply: 10_000,
      supply_sold: 0,
      price_per_unit: 78.18,
      min_units: 10,
      max_units: 2_000,
    },
    dimensions: [1.092, 0.775],
    artist_slugs: ['andy-warhol'],
    textures: {
      diffuse: '/images/assets/warhol-001-double-mickey.jpg',
    },
  },
]

const Assets: AssetResource[] = WarholCollection
const AssetCollections: AssetCollectionResource[] = [
  {
    slug: 'warhol-001',
    title: 'The Warhols',
    subtitle: 'The inaugural collection',
    description:
      'The first Warhols, on-chain, legally. Be one of the first 1,000 investors to own a piece of art history.',
  },
]

const findAssetBySlug = (slug: string) => {
  const asset = Assets.find((asset) => asset.slug === slug)
  if (!asset) {
    throw new Error(`Asset not found in Assets: ${slug}`)
  }

  return asset
}

export { AssetCollections, Assets, findAssetBySlug }
