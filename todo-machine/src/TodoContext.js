import React from 'react';
import { useLocalStorage } from './components/useLocalStorage';


// 2 componentes, provider y consumer
const TodoContext = React.createContext();

function TodoProvider(props) {

  // cambiamos para en vez de recibir array, recibir un objeto y luego lo
  // renombramos para que los nombres coincidan
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      uncompleteTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
