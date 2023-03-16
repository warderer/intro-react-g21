import { useState, useEffect } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'

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
      }).catch(error => {
        console.log(error)
      })
  }, [])

  // function to generate a random id
  const generateId = () => {
    return Math.random().toString(36).substring(2, 9)
  }

  // Función que se le pasa al componente SearchBar para que pueda ejecutarla y realizar la búsqueda en la API
  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=30&offset=0&rating=g&lang=en`)
      .then(response => response.json())
      .then(results => {
      // console.log(results.data)
        setGifs(results.data)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='App'>
      <h1>Giphy App</h1>
      <SearchBar handleSearch={sendSearch} />
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
