import React from 'react'
import AppUI from './AppUI';

const defaultTodos = [
  {text: 'Comprar leche de soja', completed: true},
  {text: 'Pepa y agua pa \'la seca', completed: true},
  {text: 'Sacar turno para la VTV', completed: false},
  {text: 'Rotar ruedas del auto', completed: false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos =[];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  // MARCAR COMPLETADO
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex (todo => todo.text === text)
    const newTodos = [ ...todos ];
    newTodos[todoIndex].completed= true;
    setTodos(newTodos);
  }

  // MARCAR INCOMPLETO
  const uncompleteTodo = (text) => {
    const todoIndex = todos.findIndex ( todo => todo.text === text)
    const newTodos = [ ...todos ];
    newTodos[todoIndex].completed = false;
    setTodos(newTodos);
  }

  // ELIMINAR
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex (todo => todo.text === text)
    const newTodos = [ ...todos ];
    // para poder eliminar el todo, usamos splice para
    // indicar desde donde eliminamos y cuantos elementos
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      uncompleteTodo={uncompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
