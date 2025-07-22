import { useState } from 'react';
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
function App() {
  
  const [todos,setTodos] = useState([]);

  function handleAddTodo(newTodo){
    const newTodoList=[...todos,newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index){
    const newTodoList=todos.filter((todo,todoIndex)=>todoIndex!==index);
    setTodos(newTodoList);
  }
  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList handleDeleteTodo ={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
