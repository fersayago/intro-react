import React from 'react'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';

function AppUI ({
  error,
  loading,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  uncompleteTodo,
  deleteTodo
}){
  return(

    <React.Fragment>
  <TodoCounter
    total={totalTodos}
    completed={completedTodos}
    />
  <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
  <TodoList>
    {error && <p>Hubo un error, desespérate</p>}
    {loading && <p>Éstamos cargando, no desesperes...</p>}
    {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
    {searchedTodos.map(todo => (
      <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => {completeTodo(todo.text)}}
        onUncomplete={() => {uncompleteTodo(todo.text)}}
        deleteTodo={() => {deleteTodo(todo.text)}}
        />
        ))}
  </TodoList>

  <CreateTodoButton />
</React.Fragment>
  )
}

export default AppUI;