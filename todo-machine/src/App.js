import React from 'react'
// import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

const todos = [
  {text: 'Comprar leche de soja', completed: false},
  {text: 'Sacar turno para la VTV', completed: false},
  {text: 'Rotar ruedas del auto', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch />
      <input placeholder="Introduzca una tarea"/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
