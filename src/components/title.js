import { styled } from 'emotion'

const Title = styled.h1`
  --scale-title: 1;
  display: ${props => props.display};
  margin: 0;
  color: ${props => props.color};
  padding: ${props => `${props.paddingY} ${props.paddingX}`};
  font-weight: ${props => props.fontWeight};
  font-family: 'Mulish', sans-serif;
  text-decoration: none;
  text-transform: ${props => props.textTransform};
  transform: ${props => props.transform};
  transition: color 0.3s ease-in-out;
  width: ${props => props.width};

  letter-spacing: calc(${props => props.letterSpacing} / var(--scale-title));
  font-size: calc(${props => props.fontSize} / var(--scale-title));
  line-height: calc(40px / var(--scale-title));

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    --scale-title: 1.2;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.breakpoint}) {
    --scale-title: 1.5;
  }
  &[aria-current='page'] {
    color: #27292b;
  }
`

Title.defaultProps = {
  display: 'block',
  color: '#000',
  fontSize: '45px',
  paddingX: '10px',
  paddingY: '20px',
  transform: 'none',
  width: 'unset',
  fontWeight: '900',
  letterSpacing: '0.65px',
  textTransform: 'none',
}

export default Title
