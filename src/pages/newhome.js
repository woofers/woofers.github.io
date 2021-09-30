import Logo from 'components/logo'
import { styled } from 'emotion'
import Email from 'components/email'
import Title from 'components/title'
import Avatar from 'components/avatar-small'
import { EarthIcon, GitHubIcon, Machobear, LivRent, Fts360, Fts } from 'logos'

const Text = styled.div`
  margin: 40px 0 40px;
  font-size: 22px;
  line-height: 50px;
  font-family: 'Montserrat', sans-serif;
`

const Header = styled(props => <Text {...props} as="header" />)`
  position: relative;
  border-radius: 20px;
  padding: 65px 20px 5px;
  border-bottom: 1px solid #d2d8e0;
  width: min(635px, 100%);
  display: flex;
  padding-left: 200px;
  margin: 22px 0;
`

const InnerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`

const Container = styled.div`
  padding-left: 18px;
`

const LogoWrapper = styled.span`
  padding: 0 0 0 20px;
  transform: translate(0, 26px);
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
  svg {
    display: inline-flex;
    align-self: center;
    position: absolute;
    width: ${props => props.$width};
    height: ${props => props.$height};
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
  width: ${props => props.$width};
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

const NewHome = () => {
  return (
    <>
      <Header $alignItems="baseline" as="header">
        <InnerHeader>
          <Big>Hey I{`'`}m</Big>{' '}
          <LogoWrapper>
            <Logo />
          </LogoWrapper>{' '}
        </InnerHeader>
        <Avatar />
      </Header>
      <Container>
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
          & reinventing renting at{' '}
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
          Previously worked on{' '}
          <Tag
            href="https://360.ftsinc.com/"
            $text="#38976a"
            $color="#ddffb4"
            $width="50px"
            $height="50px"
          >
            <Fts360 />
            FTS 360
          </Tag>
          weather and climate monitoring tech at{' '}
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
          BSc in Computer Science but most of my education comes from{' '}
          <Tag
            href="https://github.com/woofers"
            $color="#24292f"
            $width="35px"
            $height="24px"
          >
            <GitHubIcon />
            GitHub
          </Tag>{' '}
          and the{' '}
          <Tag
            href="https://github.com/woofers"
            $color="#1a8fff"
            $width="24px"
            $height="24px"
          >
            <EarthIcon />
            {'\u00A0'}real world
          </Tag>
        </Text>
      </Container>
      <EmailWrapper><Email /></EmailWrapper>
    </>
  )
}

export default NewHome
