export const toTitleCase = value => {
  if (!value) return ''
  return value.charAt(0).toUpperCase() + value.substring(1, value.length)
}
