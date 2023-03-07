import './styles/style.css'
import javascriptLogo from './assets/javascript.svg'
import HolaMundo from './components/HolaMundo'
import Countries from './components/Countries'

document.querySelector('#app').innerHTML = `
  ${HolaMundo()}
  ${Countries()}
`

