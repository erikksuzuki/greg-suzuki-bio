import { buildClient } from '../../../lib/clients/contentful'

const getAllTeamMembers = async () => {
  const client = buildClient()

  const teamMembers = await client.getEntries({
    content_type: 'teamMember',
  })

  return teamMembers.items
}

export { getAllTeamMembers }
