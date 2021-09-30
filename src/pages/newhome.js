import Logo from 'components/logo'
import { styled } from 'emotion'
import Email from 'components/email'
import Title from 'components/title'
import { Machobear, LivRent, Fts360, Fts } from 'logos'

const Text = styled.p`
  font-size: 22px;
  font-family: 'Mulish',sans-serif;
  align-items: ${props => props.$alignItems || 'center'};
`

const LogoWrapper = styled.span`
  padding: 0 0 0 20px;
`

const Card = styled.span`
  font-size: 22px;
  background: ${props => props.$color};
  border-radius: 5px;
  display: inline-flex;
  font-weight: 900;
  color: ${props => props.$text || '#fff'};
  padding: 10px;
  overflow: hidden;
  height: 48px;
  align-items: center;
  margin: 0 8px;
`

const Big = styled.span`
  font-size: 50px;
  font-weight: 900;
`

const NewHome = () => {
    return (
      <>
        <Text $alignItems="baseline"><Big>Hey I{`'`}m</Big>  <LogoWrapper><Logo /></LogoWrapper> and I make software.</Text>
        <Text>Currently working on <Card $color="#fe5f55"><LivRent width="40px" height="28px" />liv.rent</Card> & reinventing renting at <Card $color="#1a1a1a"><Machobear width="110px" height="31px" /></Card>.</Text>
        <Text>Previously worked on <Card $text="#38976a" $color="#ddffb4"><Fts360 width="50px" height="50px"/>FTS 360</Card>weather and climate monitoring tech at <Card $color="#000"><Fts /></Card>.</Text>
        <Text>B.Sc. in Computer Science but most of my education comes from GitHub and the real world.</Text>
        <Email />
      </>
    )
}

export default NewHome
