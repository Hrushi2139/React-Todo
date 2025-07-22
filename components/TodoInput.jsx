import React, { useState } from 'react'

export default function TodoInput(props){
    const {handleAddTodo}=props;
    const [todoValue,setTodoValue]=useState('');
    return (
       <header>
            <input type="text" value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter a task"/>
            <button type='submit' onClick={()=>{handleAddTodo(todoValue); setTodoValue('')}}>Add</button>
       </header>
    )

}