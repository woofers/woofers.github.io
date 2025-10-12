'use client'

import { Box, MotionBox } from '@jaxson/ui/box'
import { useTheme } from '@jaxson/ui/theme-provider'
import { responsiveIcons } from './theme-toggle.css'

const SunIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={responsiveIcons}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    stroke="none"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={responsiveIcons}
  >
    <path
      d="M0.5 13.5234V17.8776H2.4V15.6609H17.6V17.8776H19.5V13.5234H0.5Z"
      fill="#cecece"
    />
    <path d="M2.4 7.07151V5H0.5V12.0986H2.4V7.07151Z" fill="#CECECE" />
    <path
      d="M16.9667 7.38818H8.41669V12.0986H19.5V9.92152C19.5 9.24968 19.2331 8.60528 18.758 8.1302C18.2829 7.65511 17.6385 7.38818 16.9667 7.38818Z"
      fill="#c9c9c9"
    />
    <path
      d="M4.31518 7.07153H2.40002V12.0986H7.15002V9.90642C7.15002 9.5341 7.0767 9.1655 6.93424 8.82156C6.79177 8.47762 6.58295 8.16509 6.31972 7.90188C6.05648 7.63866 5.74397 7.42983 5.40003 7.28737C5.05609 7.14492 4.68746 7.07153 4.31518 7.07153Z"
      fill="#dadada"
    />
  </svg>
)

const ThemeToggle: React.FC = () => {
  const { resolvedTheme: theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const rotateAmount = theme === 'dark' ? 10 : 20
  return (
    <MotionBox
      as="button"
      onClick={toggleTheme}
      width="32px"
      height="32px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="$sm"
      border="1px solid transparent"
      backgroundColor="transparent"
      cursor="pointer"
      color="$neutral400"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <MotionBox
        key={theme}
        initial={{ filter: 'blur(4px)', opacity: 0, rotate: -rotateAmount }}
        animate={{ filter: 'blur(0px)', opacity: 1, rotate: 0 }}
        exit={{ filter: 'blur(4px)', opacity: 0, rotate: rotateAmount }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </MotionBox>
    </MotionBox>
  )
}

export default ThemeToggle
