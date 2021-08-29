import React from 'react'
import { styled } from 'emotion'
import { motion } from 'framer-motion'
import Title from 'components/title'
import Text from 'components/text'
import { setCSSVar, removeCSSVar } from 'utils/css-var'

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
  position: relative;
  width: 585px;
  padding: 0;
  height: 250px;
`

const setColor = setCSSVar('hover-color')
const removeColor = removeCSSVar('hover-color')

const Color = styled(motion.div)`
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${props => props.color || 'none'};
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
`

const Inner = styled.div`
  padding: 15px 30px;
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
`

const ShiftCard = ({
  color,
  active,
  icon: Icon,
  contrast = '#fff',
  children,
  ...rest
}) => {
  const onHover = setColor(color)
  return (
    <Block
      color={color}
      onMouseEnter={onHover}
      onMouseLeave={removeColor}
      active={active}
      {...rest}
    >
      {active && <Color layoutId="card" color={color} />}
      <Inner>
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
          <Text color={contrast} as={motion.div} layoutId="text">
            This is text. This is text. This is text. This is text. This is
            text. This is text. This is text. This is text. This is text. This
            is text. This is text. This is text. This is text.
          </Text>
        )}
      </Inner>
    </Block>
  )
}

export default ShiftCard
