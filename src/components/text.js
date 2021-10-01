import { styled } from 'emotion'

const Text = styled.div`
  --scale-text: 1;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  display: flex;
  flex-direction: column;
  margin: ${({ top, right, bottom, left }) =>
    `${top} ${right} ${bottom} ${left}`};
  width: ${props => props.width};

  font-size: calc(${props => props.fontSize} / var(--scale-text));
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    --scale-text: 1.2;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.breakpoint}) {
    --scale-text: 1.5;
  }
`

Text.defaultProps = {
  color: '#27292b',
  fontSize: '20px',
  fontWeight: '700',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: 'unset',
}

export default Text
