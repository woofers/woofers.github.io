import { styled, Typography } from 'ruffsponsive'

const Heading = styled('h1', {
  margin: '0',
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
  fontSize: '30px',
  lineHeight: '26.6px',
  letterSpacing: '0.43px',
  '@sm': {
    fontSize: '37.5px',
    lineHeight: '33px',
    letterSpacing: '0.54px',
  },
  '@xl': {
    letterSpacing: '0.65px',
    fontSize: '45px',
    lineHeight: '40px',
  },
  "&[aria-current='page']": {
    color: '#27292b',
  },
})

const Title = ({
  display,
  color,
  lineHeight,
  fontSize,
  paddingX,
  paddingY,
  transform,
  width,
  fontWeight,
  letterSpacing,
  textTransform,
  mobileScale,
  ...rest
}) => (
  <Typography type="h2" {...rest} />
)

Title.defaultProps = {
  display: 'block',
  color: '#000',
  lineHeight: '40px',
  fontSize: '45px',
  paddingX: '10px',
  paddingY: '20px',
  transform: 'none',
  width: 'unset',
  fontWeight: '900',
}

export default Title
