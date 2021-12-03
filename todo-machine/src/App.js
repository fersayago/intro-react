import React from 'react'
import AppUI from './AppUI';

/* 
const defaultTodos = [
  {text: 'Comprar leche de soja', completed: true},
  {text: 'Pepa y agua pa \'la seca', completed: true},
  {text: 'Sacar turno para la VTV', completed: false},
  {text: 'Rotar ruedas del auto', completed: false},
]
*/

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  
  if (!localStorageItem){
    // si localStorageItem esta vacio se crea un array el cual luego se puede poblar y
    // utilizar con JSON.parse en el estado de Item
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem= [];
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem);
  
  // funcion para guardar los Item en el estado pero ademas
  // PARA PERSISTIR LOS ITEM EN EL LOCAL STORAGE
  const saveItem= (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [ item, saveItem ]
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex (todo => todo.text === text)
    const newTodos = [ ...todos ];
    newTodos[todoIndex].completed= true;
    saveTodos(newTodos);
  }

  const uncompleteTodo = (text) => {
    const todoIndex = todos.findIndex ( todo => todo.text === text)
    const newTodos = [ ...todos ];
    newTodos[todoIndex].completed = false;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex (todo => todo.text === text)
    const newTodos = [ ...todos ];
    // para poder eliminar el todo, usamos splice para
    // indicar desde donde eliminamos y cuantos elementos
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
