import { styled } from 'emotion'
import Input from 'components/input'
import TextArea from 'components/text-area'
import Title from 'components/title'
import Email from 'components/email'
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
  <>
    <Email />
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
