import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista automaticamente cuando cambia el estado.
  // El primer elemento del arrglo es el valor del estado y el segundo elemento es una función que se encarga de actualizar el estado.
  // En este caso, el estado se llama inputValue y su valor inicial es una cadena vacía(string).
  // La función setInputValue permite modificar el valor del estado inputValue.
  const [inputValue, setInputValue] = useState('')

  // 4: Añadimos un nuevo estado, para almacenar la lista de tareas en un arreglo.
  const [todos, setTodos] = useState([])

  // 5. Modificamos la función handleAdd para que el ToDo Item se agregue al estado en el arreglo de ToDo
  const handleAdd = () => {
    if (inputValue.trim()) { // trim limpia espacios en blanco
      setTodos([...todos, inputValue]) // añado el nuevo ToDo al arreglo
      setInputValue('') // vacio el input para volver a escribir
    }
  }

  // 6. Función que se ejecuta cada vez que se hace clic en el botón de borrar un ToDo
  const deleteTodo = (itemIndex) => {
    setTodos(todos.filter((_, i) => i !== itemIndex))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* 2: Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la información en el estado apenas sea tecleada. La información del input estara en e.target.value */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {/* 3a: Otra forma de trabajar con eventos, es que podemos declarar la función más arriba y solo mandarla a llamar en el evento */}
      <button className='add-button' onClick={handleAdd}>Agregar</button>
      <ul>
        {/* 7. Iteramos el arreglo de ToDos y por cada elemento, renderizamos un componente ToDoItem */}
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            handleDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  )
}
export default ToDoList
