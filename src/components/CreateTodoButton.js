import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  const onClickFunction = () => {
    props.setOpenModal(prevState => !prevState);
  }
  
  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickFunction}
    >
      +
    </button>
  )
}

export default CreateTodoButton;