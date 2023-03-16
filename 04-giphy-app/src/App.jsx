import { useState, useEffect } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'

function App () {
  const [gifs, setGifs] = useState([]) // Guardo la lista de gifs
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

  // Las llamadas a la API normalmente ocurren en el useEffect
  // useEffect usa un arreglo de dependencias para saber cuando ejecutarlo. Si el arreglo está vacío, se ejecuta una sola vez.
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30&rating=g`)
      .then(response => response.json())
      .then(results => {
        // console.log(results.data)
        setGifs(results.data)
      })
  }, [])

  // function to generate a random id
  const generateId = () => {
    return Math.random().toString(36).substring(2, 9)
  }

  return (
    <div className='App'>
      <h1>Giphy App</h1>
      <div className='grid-cards'>
        {
          gifs.map(gif => (
            <ImageCard
              key={gif.id + generateId()}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
