import { buildClient } from '../../../lib/clients/contentful'

const getAllCompanyValues = async () => {
  const client = buildClient()

  const values = await client.getEntries({
    content_type: 'companyValues',
  })

  return values.items
}

export { getAllCompanyValues }
