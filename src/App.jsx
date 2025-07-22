import { useEffect, useState } from 'react';
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
function App() {
  
  const [todos,setTodos] = useState([]);
  const [todoValue,setTodoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}));
  }
  function handleAddTodo(newTodo){
    const newTodoList=[...todos,newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index){
    const newTodoList=todos.filter((todo,todoIndex)=>todoIndex!==index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index){
   const changedValue=todos[index];
   setTodoValue(changedValue);
   handleDeleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage) return;
    let localTodos=localStorage.getItem('todos');
    if(!localTodos) return;
    setTodos(JSON.parse(localTodos).todos);
  },[])
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      <TodoList handleEditTodo ={handleEditTodo} handleDeleteTodo ={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
