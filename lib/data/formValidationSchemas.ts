import * as z from 'zod'
import { COUNTRIES } from './countries'

export const AuthFormSchema = z.object({
  email: z
    .string()
    .nonempty('Please enter an email address')
    .email('Email address is invalid'),
  early_access_code: z
    .string()
    .nonempty('Please enter an early access code')
    .optional(),
})

export const VerificationFormSchema = z.object({
  email: z
    .string()
    .nonempty('Please enter an email address')
    .email('Email address is invalid'),
  code: z
    .string()
    .nonempty('Please enter a verification code')
    .regex(
      /[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}/,
      'This is an invalid code'
    )
    .length(14, 'This is an invalid code'),
})

const countryThreeLetterCodes = [
  'XYZ',
  ...COUNTRIES.map((country) => {
    return country.alpha_three_code
  }),
] as const

export const KycFormSchema = z.object({
  first_name: z.string().nonempty('Please enter a first name').optional(),
  last_name: z.string().nonempty('Please enter a last name').optional(),
  street_address: z
    .string()
    .nonempty('Please enter a street address')
    .optional(),
  city: z.string().nonempty('Please enter a city').optional(),
  state: z.string().nonempty('Please enter a state').optional(),
  zip: z.string().nonempty('Please enter a zip code').optional(),
  // .min(5)
  // .max(10)
  // .regex(/^\b\d{5}(-\d{4})?\b$/, 'This is an invalid US zip code.')
  country: z
    .enum(countryThreeLetterCodes, {
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case 'invalid_type':
            return { message: 'Please select a country' }
          case 'invalid_enum_value':
            return { message: 'Please select a country' }
          default:
            return { message: 'Missing or invalid country' }
        }
      },
    })
    .optional(),
  date_of_birth: z.coerce
    .date({
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case 'invalid_date':
            return { message: 'Please enter a valid date' }
          default:
            return { message: 'Missing or invalid date' }
        }
      },
    })
    .min(new Date('1900-01-01'), { message: 'Missing or invalid Date' })
    .max(new Date('2005-05-08'), {
      message: 'Sorry, you must be older than 18',
    })
    .optional(),
  citizenship: z
    .enum(countryThreeLetterCodes, {
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case 'invalid_type':
            return { message: 'Please select a country' }
          case 'invalid_enum_value':
            return { message: 'Please select a country' }
          default:
            return { message: 'Missing or invalid country' }
        }
      },
    })
    .optional(),
  ssn: z
    .string()
    .nonempty('Please enter a social security number')
    .regex(/^\b\d{3}-\d{2}-\d{4}\b$/)
    .optional(),
})

//

// Pastal code validation regex for both domestic and international can be found at the following links:
// https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
// https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
