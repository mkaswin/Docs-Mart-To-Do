import React, { useState } from 'react'
import './todo.css'

function Todo() {

  const [todos, settodos] = useState([])
  const [newtodo, setnewtodo] = useState('')

  const handleAddtodo =()=>{
    if(newtodo.trim() !==""){
      settodos([...todos,{text:newtodo.trim(),checked:false}])
      setnewtodo("");
    }
  }
  const  handleDeleteTodo =(index)=>{
    const  newtodos =[...todos];
    newtodos.splice(index, 1)
    settodos(newtodos);

  }




  return (
    <div>
    
        <h1 className='header'>To-Do List</h1>
        <div className='container2'>
        <input className='todo-input'
        type="text" 
        value={newtodo}
          onChange={(e)=>setnewtodo(e.target.value)} />
        <button className='input-btn' onClick={handleAddtodo}>Add</button>
        </div>
        <div className='list'>
          <ul >
            {todos.map((todo,index)=>(
              <li className='todo-list' key={index}>
                  <span>{todo.text}</span>
                  <button className='input-btn-dlt' onClick={()=>handleDeleteTodo(index)}> Delete</button>
              </li>
            ))}
          </ul>
        </div>
      
    </div>
  )
}

export default Todo
