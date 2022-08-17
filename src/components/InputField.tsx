import React, { useRef } from 'react';
import './style.css';
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}
const InputField = ({todo, setTodo, handleAdd} : Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="to-do-form" onSubmit={(e)=> {handleAdd(e); inputRef.current?.blur()}}>
            <input type="text" ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} className="to-do-input" name="to-do-input" placeholder='Add To Do Task' />
            <button type='submit' className='add-btn'>Add</button>
        </form>
    )
}

export default InputField