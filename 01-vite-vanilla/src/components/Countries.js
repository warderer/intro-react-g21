import getCountryName from '../services'

const app = document.getElementById('app')
const p = document.createElement('p')

const Countries = () => {
    getCountryName().then(data => {
        p.textContent = JSON.stringify(data[0].name.official)
        app.appendChild(p)
    })
    getCountryName()

    return ``
}

export default Countries