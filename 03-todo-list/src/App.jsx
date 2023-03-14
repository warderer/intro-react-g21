import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

function App () {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='App'>
      <ToDoList />
    </div>
  )
}

export default App
