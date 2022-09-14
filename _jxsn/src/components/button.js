import { styled } from 'stitches'
import Typography from 'components/typography'
import { Stack } from 'components/box'

const Base = styled('a', {
  transition: 'transform 0.1s ease 0s,transform 0.1s ease 0s',
  transitionDuration: '.2s',
  transitionTimingFunction: 'cubic-bezier(.2,.8,.4,1)',
  transitionProperty:
    'background-color,color,border-color,box-shadow,transform',
  display: 'inline-flex',
  textDecoration: 'none',
  borderRadius: '4px',
  px: '$4',
  py: '$0',
  mx: '$1',
  my: '$1',
  height: '$8',
  color: '$$textColor',
  background: '$$color',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$$colorHover'
  },
  "&[aria-current='false']:focus, &:not([aria-current]):focus": {
    transform: 'scale(0.9)'
  },
  "&[aria-current='page'], &[aria-current='true']": {
    color: '$$textColorActive'
  },
  variants: {
    size: {},
    type: {
      primary: {
        $$textColor: '#408423',
        $$textColorActive: '#22490f',
        $$color: '#8ad995',
        $$colorHover: '#b9e9bf',
        boxShadow:
          'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, hsl(128deg 35% 49%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, hsl(128deg 35% 49% / 30%) 0px 2px 5px 0px'
      },
      secondary: {
        $$textColor: '$colors$neutral400',
        $$textColorActive: '$colors$zinc600',
        $$color: '$colors$zinc100',
        $$colorHover: '$colors$zinc200',
        boxShadow:
          'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, hsl(0deg 80% 100%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, hsl(0deg 80% 100%) 0px 2px 5px 0px'
      },
      minimal: {
        borderRadius: '6px',
        $$textColor: '$colors$slate400',
        $$textColorActive: '$colors$slate800',
        $$color: '$colors$transparent',
        $$colorHover: '$colors$slate100'
      }
    }
  },
  defaultVariants: {
    type: 'primary'
  }
})

const Button = ({ children, ...rest }) => (
  <Base {...rest}>
    <Typography type="button" as="span" css={{ my: 'auto' }}>
      {children}
    </Typography>
  </Base>
)

export default Button
