import { buildClient } from '../../../lib/clients/contentful'

// TODO: Is there a better way to sort these?
const sortFaqItemsByDate = (faqItems: any[]) => {
  return faqItems.sort((a, b) => {
    const aDate = new Date(a.fields.publishedAt || a.sys.createdAt)
    const bDate = new Date(b.fields.publishedAt || b.sys.createdAt)
    return bDate.getTime() - aDate.getTime()
  })
}

const getAllFaqItems = async () => {
  const client = buildClient()

  const faqItems = await client.getEntries({
    content_type: 'faqItem',
  })

  return sortFaqItemsByDate(faqItems.items)
}

const getFaqItemsByTag = async (tag: string) => {
  const client = buildClient()

  const faqItem = await client.getEntries({
    content_type: 'faqItem',
  })

  return sortFaqItemsByDate(faqItem.items)
}

const getPreviewPostBySlug = async (slug: string) => {
  const client = buildClient({ preview: true })

  const faqItem = await client.getEntries({
    content_type: 'faqItem',
    'fields.slug': slug,
  })

  return faqItem.items[0]
}

const getPostBySlug = async (slug: string) => {
  const client = buildClient()

  const faqItem = await client.getEntries({
    content_type: 'faqItem',
    'fields.slug': slug,
  })

  return faqItem.items[0]
}

export { getAllFaqItems, getPostBySlug, getFaqItemsByTag, getPreviewPostBySlug }
