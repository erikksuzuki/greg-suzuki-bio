export function sanitizeString(string: string) {
  return string.replace(/[^\x00-\x7F]/g, '').replace('\u0000', '')
}
