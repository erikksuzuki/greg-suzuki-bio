const formatAsUSD = (value: any) => {
  const number = typeof value !== 'number' ? parseFloat(value) : value
  const formattingOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }
  const formattedValue = new Intl.NumberFormat(
    'en-US',
    formattingOptions
  ).format(number)

  return formattedValue
}

const formatAsUSDLarge = (value: any) => {
  const number = typeof value !== 'number' ? parseFloat(value) : value

  // Take number and display as 100K, 1M, 1B, 1T, etc.
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
  }).format(number)

  return formattedValue
}

const formatAsNumber = (value: any) => {
  const number = typeof value !== 'number' ? parseFloat(value) : value
  const formattedValue = new Intl.NumberFormat('en-US').format(number)

  return formattedValue
}

const formatAsPercentage = (value: any) => {
  const number = typeof value !== 'number' ? parseFloat(value) : value
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(number)

  return formattedValue
}

const formatAsDate = (value: any) => {
  const date = new Date(value)
  const formattedValue = new Intl.DateTimeFormat('en-US').format(date)

  return formattedValue
}

const formatAsFileSize = (value: any) => {
  const number = typeof value !== 'number' ? parseFloat(value) : value

  const formattedValue = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    style: 'unit',
    unit: 'byte',
    unitDisplay: 'narrow',
  }).format(number)

  return formattedValue
}

const formatAsSimpleDate = (value: any) => {
  const date = new Date(value)

  const month = (date.getUTCMonth() + 1).toString()
  const day = date.getUTCDate().toString()

  return `${date.getFullYear()}-${month.length === 1 ? `0${month}` : month}-${
    day.length === 1 ? `0${day}` : day
  }`
}

const formatAsNorthCapitalDate = (value: any) => {
  const date = new Date(value)

  const month = (date.getUTCMonth() + 1).toString()
  const day = date.getUTCDate().toString()

  return `${month.length === 1 ? `0${month}` : month}-${
    day.length === 1 ? `0${day}` : day
  }-${date.getFullYear()}`
}

export {
  formatAsDate,
  formatAsFileSize,
  formatAsNorthCapitalDate,
  formatAsNumber,
  formatAsPercentage,
  formatAsSimpleDate,
  formatAsUSD,
  formatAsUSDLarge,
}
