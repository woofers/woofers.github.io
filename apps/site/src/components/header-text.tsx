import { Box } from '@jaxson/ui/box'

export const HeaderText: React.FC<Nothing> = () => (
  <Box display="flex" flexDirection="column" alignItems="start">
    <Box
      lineHeight="$none"
      as="h1"
      fontWeight="$light"
      fontSize={{
        mobile: '$xxl',
        tablet: '$xxxl'
      }}
      color="$logoMark"
    >
      Jaxson
    </Box>
    <Box
      lineHeight="$none"
      as="h1"
      fontWeight="$light"
      fontSize={{
        mobile: '15px',
        tablet: '19px'
      }}
      pl={{
        mobile: '$100',
        tablet: '$025'
      }}
      color="$neutral400"
    >
      Van Doorn
    </Box>
  </Box>
)
