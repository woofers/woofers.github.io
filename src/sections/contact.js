// ~1.2 from 160
// 372x160  - Bigger 374x160 Smaller 372x159
// 585x250
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
  LivRentRed,
  Fts360,
  Fts,
} from 'logos'

const TextContainer = styled.div`
  max-width: 700px;
`

const Text = styled.div`
  font-size: 16px;
  color: #233044;
`

const Card = styled.a`
  display: inline-block;
  font-size: 22px;
  color: ${props => props.$color};
  border-radius: 5px;
  display: inline-flex;
  font-weight: 900;
  padding: 0 ${props => props.$paddingRight} 0 ${props => props.$paddingLeft};
  height: 48px;
  align-items: center;
  font-family: 'Cabin',sans-serif;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Container = styled.div`
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

const SimpleText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #233044bd;
  font-family: 'Mulish',sans-serif;
  font-weight: 400;
  letter-spacing: -0.35px;
`

const Contact = () => (
  <>
    <TextContainer>
      <SimpleText>
        I help craft{' '}
        <Tag
          href="https://github.com/woofers"
          $color="#1a8fff"
          $width="24px"
          $height="24px"
          $paddingLeft="4px"
          $paddingRight="7px"
        >
          <EarthIcon />
          {'\u00A0'}real world
        </Tag>
        software
      </SimpleText>
      <SimpleText>
        Currently working on{' '}
        <Tag
          href="https://beta.liv.rent"
          $color="#fe5f55"
          $width="40px"
          $height="28px"
          $width2="17px * -1"
          $paddingLeft="5px"
          $paddingRight="4px"
        >
          <LivRentRed />
          liv.rent
        </Tag>{' '}
        at
        <Tag
          href="https://machobear.ca"
          $color="#1a1a1a"
          $width="110px"
          $height="31px"
          $paddingLeft="12px"
          $paddingRight="12px"
        >
          <Machobear />
        </Tag>
      </SimpleText>
      <SimpleText>
        Check out my{' '}
        <Tag
          href="https://github.com/woofers"
          $color="#0f0e0f"
          $width="35px"
          $height="24px"
          $width2="81px"
          $height2="24px"
          $paddingLeft="0px"
          $paddingRight="14px"
        >
          <GitHubIcon />
          <GitHubText />
        </Tag>
      </SimpleText>
    </TextContainer>
    <Container>
      <Email />
    </Container>
  </>
)

export default Contact
