const getMonthName = (monthNumber: number, truncated: boolean) => {
  const date = new Date()
  date.setMonth(monthNumber - 1)
  if (truncated) {
    return date.toLocaleString('en-US', { month: 'long' }).substring(0, 3)
  } else {
    return date.toLocaleString('en-US', { month: 'long' })
  }
}
const formatDate = (date: string, truncated: boolean) => {
  const thisDate = new Date(date)
  const year = thisDate.getFullYear()
  const month = thisDate.getMonth() + 1
  const calendarDate = thisDate.getDate()
  return `${calendarDate} ${getMonthName(month, truncated)} ${year}`
}

export { formatDate }
