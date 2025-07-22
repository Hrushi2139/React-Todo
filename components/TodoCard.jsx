import React from 'react'

export default function TodoCard(props) {
  const {handleDeleteTodo,children,index,handleEditTodo}=props;
  return (
        <li className="todoItem">
          {children}
          <div className='actionsContainer'>
            <button onClick={()=>handleDeleteTodo(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button onClick={()=>handleEditTodo(index)}>
              <i className="fa-solid fa-pen-to-square" ></i>
            </button>
          </div>
        </li>
  
  )
}
