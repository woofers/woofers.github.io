'use client'
import dynamic from 'next/dynamic'

export const ThemeToggle = dynamic(() => import('./theme-toggle'), {
  ssr: false
})
