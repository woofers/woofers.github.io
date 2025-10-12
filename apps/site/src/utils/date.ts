const isValidDate = (date: unknown) =>
  !!date && date instanceof Date && !isNaN(date.getTime())

export const parseDate = (value: string) => {
  const date = new Date(value)
  if (!isValidDate(date)) return new Date()
  return date
}

export const formatDate = (date: Date): string => {
  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const value = weekday.format(date)
  return value
}

export const formatDateAsShort = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const value = formatter.format(date)
  return value
}

export const formatDateAsSlash = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('en-US')
  const value = formatter.format(date)
  return value
}

export const parseAndFormatDate = (value: string) =>
  formatDate(parseDate(value))

export const parseAndFormatDateAsShort = (value: string) =>
  formatDateAsShort(parseDate(value))

export const parseAndFormatDateAsSlash = (value: string) =>
  formatDateAsSlash(parseDate(value))

export const getCurrentDate = () => formatDate(new Date())
