import { styled } from 'stitches'
import Typography from 'components/typography'

const Base = styled('a', {
  $$size: '100%',
  $$delay: '0.15s',
  $$arrowTransform: 'rotate(90deg) translate(20px, 20px)',
  $$arrowOpacity: 0,
  textDecoration: 'none',
  backgroundImage: 'linear-gradient(0deg, $current 0%, $current 100%)',
  backgroundPosition: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '$$size 1px',
  transition: 'background-size 0.3s linear $$delay, padding 0.3s linear 0s',
  transform: 'translateZ(0)',
  color: '$slate600',
  pr: '$0',
  '&:hover': {
    $$size: '0%',
    $$delay: '0s',
    $$arrowTransform: 'rotate(0deg) translate($sizes$1, $sizes$0)',
    $$arrowOpacity: 1,
    pr: '$4'
  },
  '&:after': {
    content: "'>'",
    position: 'absolute',
    transition: 'transform 0.3s ease 0s, opacity 0.3s ease 0s',
    transform: '$$arrowTransform',
    opacity: '$$arrowOpacity'
  }
})

const Link = ({ children, ...rest }) => <Base {...rest}>{children}</Base>

export default Link
