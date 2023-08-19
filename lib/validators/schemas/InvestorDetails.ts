import z from 'zod'

const InvestorDetailsSchema = z.object({
  // Personal Info
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z
    .string()
    .regex(
      /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/,
      'Date must be in the format MM-DD-YYYY'
    ),
  citizenship: z.string(), // TODO: Validate this is a valid country (or 'not_usa')
  ssn: z.string().optional(),

  // Address
  street_address: z.string(),
  city: z.string(),
  state: z.string().optional(), // TODO: If country is USA, validate format
  zip: z.string().optional(),
  country: z.string(), // TODO: Validate format (3 letter country code) and that it's a valid country

  // Accredited Investor details
  ten_percent_limit_exceeded: z.boolean().optional(),
  accredited_investor_type: z.string().optional(),
})

const PartySchema = z.object({
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z
    .string()
    .regex(
      /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/,
      'Date must be in the format MM-DD-YYYY'
    ),
  citizenship: z.string().optional(), // Need citizenship *and* country to calculate domicile
  ssn: z.string().optional(), // Used in KYC on update

  street_address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),

  // Accredited Investor details
  ten_percent_limit_exceeded: z.boolean().optional(),
  accredited_investor_type: z.string().optional(),
})

const AccountSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),

  street_address: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
})

export { AccountSchema, InvestorDetailsSchema, PartySchema }
