import z from 'zod'

const UpdateTradeStatusSchema = z.object({
  partyId: z.string(),
  offeringId: z.string(),
  tradeId: z.string(),
  accountId: z.string(),
  orderStatus: z.string(),
})

export { UpdateTradeStatusSchema }
