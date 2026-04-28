import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchtodos,updatetodos,createtodos,deletetodos } from "../features/counter/todo/todoSlice";


function Todoreducer(){
        const dispatch = useDispatch();
        const {item : todos, loading ,error} = useSelector(
            (state) => state.todos
        )
        const[title,setTitle] = useState("");
        const[editid,setEditid] = useState(null);

        useEffect(()=>{
            dispatch(fetchtodos());
        },[dispatch]);

        const handlesubmit = async(e) =>{
            e.preventDefault();
            if(!title.trim()){
                return;
            }

            if(editid){
                await dispatch(updatetodos({
                    id : editid,
                    title,
                    completed : false
                }))
            }
            else{
                await dispatch(createtodos(title))
            }
            setEditid(null)
            setTitle("")
        }

        const togglecomplete = async(todo) =>{
           await dispatch(updatetodos({
             id : todo.id,
             title : todo.title,
             completed : !todo.completed
           }))
        }

        const handleDelete = async(id) =>{
            await dispatch(deletetodos(id))
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

export default Todoreducer;