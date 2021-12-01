import React from 'react'
import './TodoSearch.css'

function TodoSearch(){

  const [searchValue, setSearchValue] = React.useState('')

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <React.Fragment>
      <input 
        className="TodoSearch"
        placeholder="Introduzca una tarea"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </React.Fragment>
  )
}

export default TodoSearch;