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

const Grey = styled.span`
  color: #d2d8e0;
  font-family: Cantarell, sans-serif;
`

const Bubble = styled.span`
  color: #fff;
  background: #d2d8e0;
  border-radius: 18px;
  padding: 0px 8px 5px;
  margin-left: 6px;
`

const EmailContainer = styled.div`
  display: flex;
  > span:first-of-type {
    padding-top: 0;
  }
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

const Row = styled.div`
  display: flex;
`

const Contact = () => (
  <>
    <Email>
      <Title
        paddingX="0"
        paddingY="0"
        fontSize="25px"
        fontWeight="500"
        letterSpacing="-0.5px"
        color="#c9c9c9"
      >
        Reach out
      </Title>
      <EmailContainer>
        <Title
          fontSize="45px"
          fontWeight="400"
          letterSpacing="-1.5px"
          color="#fe9c55"
          as="span"
        >
          <span>jaxson.</span>
          <Grey>vandoorn</Grey>
          <Bubble>@gmail.com</Bubble>
        </Title>
      </EmailContainer>
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
