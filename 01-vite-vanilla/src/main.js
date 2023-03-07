import './styles/style.css'
import HolaMundo from './components/HolaMundo'
import Countries from './components/Countries'

document.querySelector('#app').innerHTML = `
  ${HolaMundo()}
  ${Countries()}
`
