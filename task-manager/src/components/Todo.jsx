import { useState,useEffect } from "react";
import api from "../api/api";


function Todos_show(){
        const[todos,setTodos] = useState([]);
        const[title,setTitle] = useState("");
        const[editid,setEditid] = useState(null);

        const fetchtodos = async()=>{
            const response = await api.get('/todos/');
            setTodos(response.data)
        }

        useEffect(()=>{
            fetchtodos();
        },[])

        const handlesubmit = async(e) =>{
            e.preventDefault();
            if(!title.trim()){
                return;
            }

            if(editid){
                await api.put(`/todos/${editid}/`,{
                    title,
                    completed : false     
                }) ;
            }
            else{
                await api.post(`/todos/`,{
                    title,
                    completed : false
                })
            }
            fetchtodos();
            setEditid(null)
            setTitle("")
        }

        const togglecomplete = async(todo) =>{
            await api.put(`/todos/${todo.id}/`,{
                title : todo.title,
                completed : !todo.completed
            })
            fetchtodos();
        }

        const handleDelete = async(id) =>{
            await api.delete(`/todos/${id}/`)
            fetchtodos();
        }

        const handleEdit =async(todo) =>{
            setEditid(todo.id)
            setTitle(todo.title)
        }


    return(
        <>
            <div>Todos</div>
            <div className="TodoForm">
                <input data-cy="input" type="text" value={title} placeholder="Enter the title" onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={handlesubmit}>{editid ? "Upadate":"Add"}</button>
            </div>

            <div>
                {todos.map((todo) => {
                    return(<li key={todo.id}>
                        <span
                         style={{textDecoration : todo.completed ? "line-through" : "none"}}
                        >
                            {todo.title}
                        </span>
                        <button onClick={()=> handleEdit(todo)}>Edit</button>
                        <button onClick={()=> handleDelete(todo.id)}>Delete</button>
                        <button onClick={()=> togglecomplete(todo)}>{todo.completed ? "Mark Incomplete" : "Mark Complete"}</button>
                    </li>)
                })}
            </div>
        </>
    )
}

export default Todos_show;