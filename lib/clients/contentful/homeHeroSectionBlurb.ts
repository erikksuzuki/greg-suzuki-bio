import { buildClient } from '../../../lib/clients/contentful'

const getHomeHeroSectionBlurb = async () => {
  const client = buildClient()

  const homeHeroSectionBlurb = await client.getEntries({
    content_type: 'homeHeroSectionBlurb',
  })

  return homeHeroSectionBlurb.items
}

export { getHomeHeroSectionBlurb }
