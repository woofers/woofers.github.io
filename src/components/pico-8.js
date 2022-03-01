import P8 from 'react-pico-8'
import { styled } from 'ruffsponsive'

const Pico8 = styled(P8, {
  margin: '16px 0',
  '.p8_menu_button': {
    button: { background: '#696068' },
    '&:hover': { button: { background: '#9c949b' } },
  },
  '.p8_menu_button img': { borderRadius: '0', maxWidth: 'none' },
  '#p8_container': { '> button': { img: { marginBottom: 'auto' } } },
})

Pico8.defaultProps = {
  center: true,
}

export default Pico8
