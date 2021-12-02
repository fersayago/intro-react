import React from 'react';
import './TodoItem.css'

function TodoItem(props) {

  const changeCompleteState = () => {
    if (!props.completed === true){
      props.onComplete()
    } else {
      props.onUncomplete()
    }
  }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={() => {changeCompleteState()}}
      >
        🗸
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={() => props.deleteTodo()}
      >
        X
      </span>
    </li>
  )
}

export default TodoItem;