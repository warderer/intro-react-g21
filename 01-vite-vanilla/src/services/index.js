const getCountryName = async () => {
    const req = await fetch('https://restcountries.com/v3.1/all')
    const res = req.json()
    return res
}

export default getCountryName