import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <React.Fragment>
      <input 
        className="TodoSearch"
        placeholder="Busque una tarea"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </React.Fragment>
  )
}

export default TodoSearch;