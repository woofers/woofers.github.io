import { React } from 'react'
import { styled, css } from 'emotion'

export const shift = props => css`
  > ${!props.$hasPlaceholder
      ? ':is(input:valid, input:focus) ~ label'
      : 'label'} {
    transform: translate(${props.$paddingX}, 0);
    pointer-events: all;
  }
  > input:valid ~ span {
    transform: translate(
      -${props.$placeholderWidth},
      calc(${props.$paddingY} + ${props.$labelHeight})
    );
  }
`

const Field = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Cabin', sans-serif;
  transform: translate(
    ${props => props.$paddingX},
    calc(${props => props.$paddingY} + ${props => props.$labelHeight})
  );
  color: #bbc1e1;
  transition: transform ${props => props.$delay} ease-in-out;
  pointer-events: none;
`

const Label = ({ animate = true, delay = '0.1s', ...rest }) => {
  return <Field $animate={animate} $delay={delay} {...rest} />
}

export default Label
