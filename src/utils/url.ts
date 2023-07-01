import type { UrlObject } from 'url'

const isUrl = (to: string | UrlObject | undefined): to is UrlObject => true
export const toUrl = (to: string | UrlObject | undefined) =>
  isUrl(to) ? to : ({} as UrlObject)
