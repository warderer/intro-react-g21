import { useState } from 'react'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista automaticamente cuando cambia el estado.
  // El primer elemento del arrglo es el valor del estado y el segundo elemento es una función que se encarga de actualizar el estado.
  // En este caso, el estado se llama inputValue y su valor inicial es una cadena vacía(string).
  // La función setInputValue permite modificar el valor del estado inputValue.
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    console.log('Agregue', inputValue)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* 2: Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la información en el estado apenas sea tecleada. La información del input estara en e.target.value */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {/* 3a: Otra forma de trabajar con eventos, es que podemos declarar la función más arriba y solo mandarla a llamar en el evento */}
      <button className='add-button' onClick={handleAdd}>Agregar</button>
      <ul>
        <li>Item 1
          <button>Eliminar</button>
        </li>
        <li>Item 2
          <button>Eliminar</button>
        </li>
        <li>Item 3
          <button>Eliminar</button>
        </li>
      </ul>
    </div>
  )
}
export default ToDoList
