import { ArtistResource } from '../../src/resources/ArtistResource'

const Artists: ArtistResource[] = [
  {
    slug: 'andy-warhol',
    name: 'Andy Warhol',
    bio: 'Andy Warhol was an American artist who was a leading figure in the visual art movement known as pop art. His works explore the relationship between artistic expression, celebrity culture, and advertisement that flourished by the 1960s.',
    born_at: '1928-08-06T00:00:00Z',
    died_at: '1987-02-22T00:00:00Z',
    born_city: 'Pittsburgh',
    born_country: 'United States',
    nationality: 'American',
  },
  {
    slug: 'fidelia-bridges',
    name: 'Fidelia Bridges',
    bio: '',
    born_at: '1834',
    died_at: '1923',
    born_country: 'America',
    nationality: 'American',
  },
  {
    slug: 'john-f-francis',
    name: 'John F. Francis',
    bio: '',
    born_at: '1808',
    died_at: '1886',
    born_country: 'America',
    nationality: 'American',
  },
  {
    slug: 'paul-lacroix',
    name: 'Paul Lacroix',
    bio: '',
    born_at: '1827',
    died_at: '1869',
    born_country: 'France',
    nationality: 'French',
  },
  {
    slug: 'george-henry-hall',
    name: 'George Henry Hall',
    bio: '',
    born_at: '1825',
    died_at: '1913',
    born_country: 'America',
    nationality: 'American',
  },
  {
    slug: 'severin-roesen',
    name: 'Severin Roesen',
    bio: '',
    born_at: '1815',
    died_at: '1872',
    born_country: 'Germany',
    nationality: 'Prussian-American',
  },
]

const findArtistsBySlugs = (slugs: string[]): ArtistResource[] => {
  return Artists.filter((artist) => slugs.includes(artist.slug))
}

export { Artists, findArtistsBySlugs }
