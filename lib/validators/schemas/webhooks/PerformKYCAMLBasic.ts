import z from 'zod'

const PerformKYCAMLBasicSchema = z.object({
  partyId: z.string(),
  kycstatus: z.string(),
  amlstatus: z.string(),
})

export { PerformKYCAMLBasicSchema }
