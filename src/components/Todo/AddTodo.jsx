import { useState } from "react";
import './Todo.css'
import { CheckIcon, XMarkIcon } from "@heroicons/react/16/solid";

const AddTodo = () => {

    const [text , setText] = useState('')
    const [todo , setTodo]= useState([]) 
    return ( <>
            <div className="container flex flex-col gap-3 items-center mx-auto mt-20 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-lg pb-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl w-6/12">
                <h2 className="text-4xl text-center ">Todo List</h2>
                <textarea className="boxes my-textarea" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Create Todo ..."></textarea>   
                <button onClick={handleCreate} className="boxes create-btn">Create</button>

                <div className="w-full">
                    <ul className="">
                            {todo.map(e => (
                                <li key={e.id} className="">
                                    <div className="flex mx-auto boxes justify-between items-center mb-2 px-4 ">

                                        {e.completed === false ? (<h2 className="">{e.text}</h2>) : (<h2 className="line-through">{e.text}</h2>)}
                                        <div className="flex justify-end  w-4/12">
                                        <button onClick={()=>handleComplete(e.id)} className="rounded-full w-2/12 border border-green-500 m-2 hover:bg-green-300 text-green-500 "><CheckIcon/></button>
                                        <button onClick={()=>handleDelete(e.id)} className="rounded-full w-2/12 border border-red-500 m-2 hover:bg-red-300 text-red-500 "><XMarkIcon/></button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

    
    </> );

    function handleDelete(index){
        const newTodo = todo.filter(e => (
            e.id !== index
        ))

        setTodo(newTodo)
    }

    function handleComplete(index){

        setTodo(prevtodo => prevtodo.map(e => e.id === index ? { ...e, completed: true } : e))

    }

    function handleCreate(){
        if (text.trim() === "") return;
        console.log(text)
        const newTask = {
        id: Date.now(),
        text: text,
        completed: false
        };

    setTodo([...todo, newTask]);
    setText("");
    
}

}
 
export default AddTodo;
