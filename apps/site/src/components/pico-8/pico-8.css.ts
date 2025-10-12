import { globalStyle } from '@vanilla-extract/css'

globalStyle(`#p8_container > button`, {
  width: '100% !important',
  aspectRatio: '1 / 1',
  marginBottom: '20px'
})

globalStyle(`div:has(> .emscripten)`, {
  marginLeft: '0 !important'
})

globalStyle(`.emscripten`, {
  width: '100% !important',
  height: '100% !important'
})

globalStyle(`.p8_menu_button`, {
  display: 'inline !important'
})

globalStyle(`.p8_menu_button:hover > button`, {
  display: 'inline',
  background: '#6f666d'
})

globalStyle(`.p8_menu_button > button`, {
  background: '#a49aa1'
})

globalStyle(`.p8_menu_button img`, {
  borderRadius: 0,
  maxWidth: 'none'
})

globalStyle(`#p8_container > button`, {
  borderRadius: '4px'
})

globalStyle(`#p8_container > button > img`, {
  marginBottom: 'auto'
})

globalStyle(`#p8_playarea > div:last-of-type > div`, {
  marginLeft: 0
})

globalStyle(`#canvas`, {
  borderRadius: '4px',
  margin: '0 auto'
})

globalStyle(`#canvas + div`, {
  display: 'inline-block',
  marginLeft: '0',
  marginTop: '12.5px'
})
