import { styled } from 'stitches'
import Link from 'components/link'
import Typography from 'components/typography'
import { Stack, Box } from 'components/box'
import Card from 'components/card'

const InfoCard = ({
  background = '#fadc96',
  color = '#bf8855',
  title,
  subtitle,
  children,
  ...reset
}) => {
  return (
    <Card>
      <Stack>
        <Box css={{ color: '$gray400', pt: '8px' }}>
          <Typography type="button">{subtitle}</Typography>
        </Box>
        <Box css={{ pt: '20px' }}>
          <Typography type="h4">{title}</Typography>
        </Box>
        <Box css={{ color: '$slate700', pt: '20px' }}>{children}</Box>
      </Stack>
    </Card>
  )
}

export default InfoCard
