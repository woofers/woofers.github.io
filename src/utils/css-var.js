
export const removeCSSVar = key => () => {
  if (typeof window === 'undefined') return
  document.documentElement.style.removeProperty(`--${key}`)
}

export const setCSSVar = key => value => () => {
  if (typeof window === 'undefined') return
  document.documentElement.style.setProperty(`--${key}`, value)
}
