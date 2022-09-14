import { useMemo } from 'react'
import { useTheme } from 'components/theme-provider'
import { styled } from 'stitches'
import Typography from 'components/typography'
import { Stack, Box, Flex } from 'components/box'
import { toTitleCase } from 'utils'

const Grid = styled('div', {
  width: '100%',
  maxWidth: '672px',
  display: 'grid',
  gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
  gridGap: '$2',
  pb: '$1',
  '@xl': {
    gridTemplateColumns: 'repeat(10,minmax(0,1fr))'
  }
})

const Color = styled(Box, {
  height: '$7',
  br: '$3'
})

const group = colors => {
  const add = (name, value, map) => {
    const [color, number] = name.split(/([0-9]+)/).filter(color => !!color)
    if (!number) return map
    map[color] = map[color] || {}
    map[color][number] = value
    return map
  }
  return Object.values(colors).reduce((acc, next) => {
    return add(next.token, next, acc)
  }, {})
}

const Colors = () => {
  const theme = useTheme()
  const { colors } = theme
  const grouped = group(colors)
  return (
    <>
      <Typography as="h1" type="h3" css={{ px: '$4', py: '$5' }}>
        Colors
      </Typography>
      {Object.entries(grouped).map(([color, variants]) => (
        <Flex key={color} direction={{ '@sm': 'row', '@initial': 'column' }}>
          <Stack css={{ width: '128px', px: '$5', py: '$5' }}>
            <Typography type="button" as="div">
              {toTitleCase(color)}
            </Typography>
            <Typography type="body2" as="div" css={{ color: '$gray500' }}>
              colors.{color}
            </Typography>
          </Stack>
          <Grid>
            {Object.entries(variants).map(([weight, { token, value }]) => (
              <Box key={token}>
                <Color
                  css={{ backgroundColor: value }}
                  title={`${toTitleCase(color)} ${weight}`}
                />
                <Stack css={{ pt: '$1', pb: '$2' }}>
                  <Typography type="subtitle2" as="div" css={{ pt: '$1' }}>
                    {weight}
                  </Typography>
                  <Typography
                    type="body2"
                    as="div"
                    css={{ pt: '$1', color: '$gray500' }}
                  >
                    {value}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Flex>
      ))}
    </>
  )
}

export default Colors

// hsl(25 99% 66% 1)
