import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton() {

  const onClickFunction = (msg) => {
    alert(msg)
  }
  
  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickFunction('aqui se deberia abrir el modal')}
    >
      +
    </button>
  )
}

export default CreateTodoButton;