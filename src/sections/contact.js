import { styled } from 'emotion'
import Input from 'components/input'
import TextArea from 'components/text-area'
import Title from 'components/title'
import Email from 'components/email'
import Logo from 'components/logo'
import Avatar from 'components/avatar'
import { ReactComponent as UserIcon } from 'icons/user.svg'
import { ReactComponent as MailIcon } from 'icons/mail.svg'
import { ReactComponent as PageIcon } from 'icons/page.svg'

import {
  EarthIcon,
  GitHubText,
  GitHubIcon,
  Machobear,
  LivRent,
  Fts360,
  Fts,
} from 'logos'

const TextContainer = styled.div`
  max-width: 700px;
  visibility: hidden;
`

const Text = styled.div`
  margin: 20px 0 20px;
  font-size: 25px;
  line-height: 50px;
  font-family: 'Montserrat', sans-serif;
`

const Card = styled.a`
  display: inline-block;
  font-size: 22px;
  background: ${props => props.$color};
  border-radius: 5px;
  display: inline-flex;
  font-weight: 900;
  color: ${props => props.$text || '#fff'};
  padding: 10px;
  height: 48px;
  align-items: center;
  margin: 0 6px;
  font-family: 'Mulish', sans-serif;
  position: relative;
  svg:first-of-type {
    display: inline-flex;
    align-self: center;
    position: absolute;
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
  svg:nth-of-type(2) {
    left: calc(${props => props.$width} + 10px);
    display: inline-flex;
    align-self: center;
    position: absolute;
    width: ${props => props.$width2};
    height: ${props => props.$height2};
  }
  overflow: hidden;
  ${props =>
    props.$border &&
    `
    border: 1px solid #c9c9c9;
  `}
`

const Big = styled.span`
  font-family: 'Mulish', sans-serif;
  font-size: 50px;
  font-weight: 900;
  @media (max-width: 767px) {
    display: none;
  }
`

const Spacer = styled.span`
  width: calc(${props => `${props.$width} + ${props.$width2 || '0px'}`});
  user-select: none;
`

const EmailWrapper = styled.div`
  margin-top: 30px;
  width: min(635px, 100%);
  border-top: 1px solid #d2d8e0;
  border-radius: 20px;
  padding: 20px 20px 0;
`

const Tag = ({ children, ...rest }) => (
  <Card {...rest}>
    <Spacer {...rest} aria-hidden>
      {'\u00A0'}
    </Spacer>
    {children}
  </Card>
)

const Wrapper = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  padding-bottom: 100px;
`

const Icon = styled.div`
  width: 100%;
  height: 46px;
  > svg {
    width: 100%;
    height: 100%;
  }
  margin-top: 50px;
  margin: 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 10px 30px;
  grid-template-columns: repeat(2, 0.5fr);
  margin-bottom: 800px;
`

const Message = styled(TextArea)`
  grid-column: span 2;
`

const Contact = () => (
  <Wrapper>
    <TextContainer>
    <Text>
      I help craft{' '}
      <Tag
        href="https://github.com/woofers"
        $color="#1a8fff"
        $width="24px"
        $height="24px"
      >
        <EarthIcon />
        {'\u00A0'}real world
      </Tag>
      software
    </Text>
    <Text>
      Currently working on{' '}
      <Tag
        href="https://beta.liv.rent/"
        $color="#fe5f55"
        $width="40px"
        $height="28px"
      >
        <LivRent />
        liv.rent
      </Tag>{' '}
      at
      <Tag
        href="https://machobear.ca"
        $color="#1a1a1a"
        $width="110px"
        $height="31px"
      >
        <Machobear />
      </Tag>
    </Text>
    <Text>
      Previously at
      <Tag
        href="https://ftsinc.com/"
        $color="#fff"
        $width="0"
        $height="0"
        $border
      >
        <Fts />
      </Tag>
    </Text>
    <Text>
      Check out{' '}
      <Tag
        href="https://github.com/woofers"
        $color="#24292f"
        $width="35px"
        $height="24px"
        $width2="81px"
        $height2="24px"
      >
        <GitHubIcon />
        <GitHubText />
      </Tag>
    </Text>
    </TextContainer>
    <Container>
      <Email />
    </Container>
  </Wrapper>
)

export default Contact
