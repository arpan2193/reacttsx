import React from 'react'
import { Todo } from '../model'
import "./style.css"
import { AiFillEdit } from 'react-icons/ai'

interface Props {
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className="to-do-list-wrapper">
      {todos.map((t)=> (
        <div>
            <li>{t.todo}<a href="#"><AiFillEdit /></a></li>
            
        </div>
      

      ))}
    </div>
  )
}

export default TodoList
