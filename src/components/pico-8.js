import P8 from 'react-pico-8'
import { styled } from 'jxsn'

const Game = styled(P8, {
  margin: '16px 0',
  '.p8_menu_button': {
    display: 'inline',
    button: { background: '#696068' },
    '&:hover': { button: { background: '#9c949b' } }
  },
  '.p8_menu_button img': { borderRadius: '0', maxWidth: 'none' },
  '#p8_container': { '> button': { img: { marginBottom: 'auto' }, div: { br: '25px' } } },
  '#p8_playarea > div:last-of-type > div': {
    ml: 0
  },
  '#canvas': {
    margin: '0 auto',
    br: '25px'
  },
  '#canvas + div': {
    display: 'inline-block',
    marginLeft: '0',
    marginTop: '12.5px'
  }
})

const Pico8 = ({ center = true, ...rest }) => {
  return <Game {...rest} center={center} />
}

export default Pico8
