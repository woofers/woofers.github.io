import React from 'react'
import { styled } from 'emotion'
import { motion } from 'framer-motion'
import Title from 'components/title'
import Text from 'components/text'
import { setCSSVar, removeCSSVar } from 'utils/css-var'
import Link from 'link'

const CardLink = styled(Link)`
  width: 100%;
`

const HeadingContainer = styled(motion.div)`
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
  z-index: ${props => (props.active ? 10 : 5)};
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    width: 100%;
  }
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

const TitleTransition = styled(Title)`
  transition: color 4s ease-in-out 1s;
`

const ContentWrapper = styled(motion.div)``

const ShiftCard = ({
  color,
  active,
  icon: Icon,
  contrast = '#fff',
  children,
  onClick,
  id,
  ...rest
}) => {
  const onHover = setColor(color)
  return (
    <CardLink href={id !== 'intro' ? `/me/${id}` : '/'} onClick={onClick} shallow>
      <Block
        color={color}
        onMouseEnter={onHover}
        onMouseLeave={removeColor}
        active={active}
        layout
        initial={false}
        animate={{
          marginTop: active ? '20px' : '0px',
          height: active ? '250px' : '80px',
        }}
        key={active}
        {...rest}
      >
        {active && <Color layoutId="card" color={color} />}
        <Inner>
          <HeadingContainer
            as={motion.div}
            layoutId={active ? 'header' : undefined}
            layout="position"
          >
            <TitleTransition
              textTransform="lowercase"
              fontSize="45px"
              letterSpacing="-2.25px"
              color={!active ? color : contrast}
            >
              › {children}
            </TitleTransition>
            <IconContainer fontSize="45px">
              <Icon />
            </IconContainer>
          </HeadingContainer>
          {active && (
            <ContentWrapper as={motion.div} layoutId="content">
              <Text color={contrast}>text text</Text>
            </ContentWrapper>
          )}
        </Inner>
      </Block>
    </CardLink>
  )
}

export default ShiftCard
