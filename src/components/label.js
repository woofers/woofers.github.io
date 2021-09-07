import { React } from 'react'
import { styled } from 'emotion'

const Field = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Cabin',sans-serif;
  transform: translate(12px, calc(12px + 28px));
  color: #bbc1e1;
  transition: transform ${props => props.$delay} ease-in-out;
  pointer-events: none;
`

const Label = ({ animate = true, delay = '0.1s', ...rest }) => {
  return (
    <Field $animate={animate} $delay={delay} {...rest} />
  )
}

export default Label
