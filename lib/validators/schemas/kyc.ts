import * as z from 'zod'

export const USCitizenExtraSchema = z.object({
  ssn: z
    .string()
    .regex(/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/, 'This is an invalid SSN.'),
})

export const NonUSCitizenExtraSchema = z.object({
  // TODO: Add upload strategy
  file: z.string(),
})

// TODO: Can we make SSN required but only for USA citizens and residents?
export const KYCFormSchema = z.object({
  ssn: z
    .string()
    .regex(/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/, 'This is an invalid SSN.')
    .optional(),
  file: z.any().optional(),
  // ten_percent_limit_exceeded: z.boolean(),
})

export const AccreditedInvestorSchema = z.object({
  accredited_investor: z.boolean().optional(),
  // accredited_investor_type: z.string().optional(),
})
