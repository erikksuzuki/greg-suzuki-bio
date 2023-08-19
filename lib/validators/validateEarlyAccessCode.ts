import { EARLY_ACCESS_CODES } from '../data/early_access_codes'

const validateEarlyAccessCode = (code: string) => {
  return EARLY_ACCESS_CODES.includes(code.trim().toLowerCase())
}

export { validateEarlyAccessCode }
