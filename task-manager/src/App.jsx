// import { useState, useEffect } from 'react'
// import { getitems,delete_item,setitem } from './services/api'
// import InputItem from './components/InputItem'
// import ShowItems from './components/ShowItems'
// import StatusGraph from './components/StatusGraph'
import Counter from './components/counter'

import './App.css'

function App() {
  
  // const[tasks,setTasks] = useState([])
  
  // useEffect(()=>{
  //   allTasks()
  // },[])
  
  // const allTasks = async()=>{
  //     let tsks = await getitems()
  //     setTasks(tsks)
  //     return tsks;
  // }

  // const additems = async(task)=> {
  //    const newtask = await setitem(task);
  //    setTasks((prev) => [...prev, newtask])
  //    console.log("Item added successfully")

  // }

  // const delitems = async(id) =>{
  //    await delete_item(id)
  //    setTasks((prev) => prev.filter((task) => task.id !== id))
  //    console.log("Item deleted successfully")
  // }

  // <InputItem additems={additems}/>
  //    <ShowItems allTasks = {tasks} delitems={delitems} />

  return (
    <>
     <Counter/>
    </>
  )
}

export default App
