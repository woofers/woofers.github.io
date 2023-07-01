import { clsx as cx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function clsx(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}

export { cva, cx } from 'class-variance-authority'
export type {
  VariantProps,
  CxOptions,
  CxReturn
} from 'class-variance-authority'
