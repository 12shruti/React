import React from 'react'
import { TodoItems } from './TodoItems'


export const Todos = (props) => {
  let myStyle ={
    minHeight : "70vh",
    margin:" 40px auto"

  }
  return (
    <div className="container" style={myStyle}> 
        <h3 className="my-3">Todos List</h3>
        {props.todos.length===0? "No Todos to Display" : 
        props.todos.map((todo,index)=>{
          return(
            <>
             <TodoItems key={index} todo={todo} onDelete={props.onDelete} /><hr />
            </>
          )
        })
        
         }
        
    </div>
  )
}
