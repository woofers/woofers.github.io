import { styled } from 'emotion'
import Input from 'components/input'
import TextArea from 'components/text-area'
import Title from 'components/title'
import { ReactComponent as UserIcon } from 'icons/user.svg'
import { ReactComponent as MailIcon } from 'icons/mail.svg'
import { ReactComponent as PageIcon } from 'icons/page.svg'

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

const Email = styled.div`
  flex-flow: row wrap;
  margin-top: 300px;
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

const EmailLink = styled.a`
  padding-left: 10px;
  display: flex;
  align-items: baseline;
  text-decoration: none;
  width: max-content;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mini.breakpoint}) {
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 300px;
  }
`

const LargeText = props => (
  <Title
    fontSize="45px"
    fontWeight="900"
    paddingX="0"
    paddingY="0"
    letterSpacing="-1.5px"
    color="#fe9c55"
    as="div"
    {...props}
  />
)

const First = styled(LargeText)`
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.breakpoint}) {
    font-size: 33px;
  }
`

const Last = styled(First)`
  color: #d2d8e0;
  font-family: Cantarell, sans-serif;
  font-weight: 400;
`

const Bubble = styled(First)`
  color: #fff;
  background: #d2d8e0;
  border-radius: 18px;
  padding: 0px 8px 5px;
  margin-left: 6px;
  height: 61px;
  display: flex;
  align-items: center;
  width: max-content;
  max-width: 100%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.breakpoint}) {
    border-radius: 13px;
    height: 45px;
    height: unset;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mini.breakpoint}) {
    margin: 0 0 0 auto;
  }
`

const Name = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Contact = () => (
  <>
    <Email>
      <Title
        paddingX="0"
        paddingY="0"
        fontSize="25px"
        letterSpacing="-0.5px"
        color="#c9c9c9"
      >
        Reach out
      </Title>
      <EmailLink href="mailto:jaxson.vandoorn@gmail.com">
        <Name>
          <First>jaxson.</First>
          <Last>vandoorn</Last>
        </Name>
        <Bubble>@gmail.com</Bubble>
      </EmailLink>
    </Email>
    <InputContainer>
      <Input placeholder="Name" iconWidth="36px" iconPadding="3px">
        <Icon>
          <UserIcon />
        </Icon>
      </Input>
      <Input placeholder="Email" iconWidth="36px" iconPadding="5px">
        <Icon>
          <MailIcon />
        </Icon>
      </Input>
      <Message
        placeholder="Message"
        height="200px"
        iconWidth="36px"
        iconPadding="5px"
      >
        <Icon>
          <PageIcon />
        </Icon>
      </Message>
    </InputContainer>
  </>
)

export default Contact
