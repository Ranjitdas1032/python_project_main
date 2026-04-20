

function ShowItems({allTasks,delitems}){
    return(
        <>
        <h3 data-cy="all-items">All items of list...</h3>
        {allTasks.map((task, index) =>{
            return <li key={task.id} data-cy ={`task-${index+1}`} >Id is {task.id} and task is {task.task} ---- <button onClick={() => delitems(task.id)} data-cy = "Delete-btn">Delete</button> </li>
        })}
        </>     
    )
}
export default ShowItems;