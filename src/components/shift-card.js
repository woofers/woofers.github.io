import React from 'react'
import { styled } from 'emotion'
import { motion } from 'framer-motion'
import Title from 'components/title'
import Text from 'components/text'

const HeadingContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 80px;
`

const IconContainer = styled.div`
  font-size: ${props => props.fontSize};
  > img {
    width: 64px;
  }
`

const Block = styled(motion.div)`
  cursor: pointer;
  background-color: ${props => props.color};
  border-radius: 25px;
  width: 585px;
  height: 250px;
  padding: 15px 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
  ${props =>
    !props.active &&
    `
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    height: 80px;
    box-shadow: none;
  `}
`

const ShiftCard = ({
  color,
  active,
  icon: Icon,
  contrast = '#fff',
  children,
  ...rest
}) => (
  <Block layoutId="card" color={color} active={active} {...rest}>
    <HeadingContainer>
      <Title
        textTransform="lowercase"
        fontSize="45px"
        fontWeight="400"
        letterSpacing="-2.25px"
        color={!active ? color : contrast}
      >
        › {children}
      </Title>
      <IconContainer fontSize="45px">
        <Icon />
      </IconContainer>
    </HeadingContainer>
    {active && (
      <Text color={contrast}>
        This is text. This is text. This is text. This is text. This is text.
        This is text. This is text. This is text. This is text. This is text.
        This is text. This is text. This is text.
      </Text>
    )}
  </Block>
)

export default ShiftCard
