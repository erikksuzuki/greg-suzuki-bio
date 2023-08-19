import z from 'zod'

const UpdatePartySchema = z.object({
  partyId: z.string(),
  KYCstatus: z.string().optional(),
  AMLstatus: z.string().optional(),
})

export { UpdatePartySchema }
