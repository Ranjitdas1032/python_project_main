const key = "ranjit"

const delay = (ms) => new Promise((res) => setTimeout(res,ms));

export const getitems = async()=>{
    await delay(300);
    const tasks = JSON.parse(localStorage.getItem(key)) || []
    return tasks;
}

export const setitem = async(task) =>{
    await delay(300)
    let all_tasks = await getitems()
    let new_task = {id : Date.now(), task : task}
    all_tasks.push(new_task)
    localStorage.setItem(key,JSON.stringify(all_tasks));
    return new_task;
}

export const delete_item = async(id) =>{
    await delay(300)
    let all_tasks = await getitems()
    let updated_tasks = all_tasks.filter((task)=> task.id !== id)
    localStorage.setItem(key,JSON.stringify(updated_tasks));
    return true;
}