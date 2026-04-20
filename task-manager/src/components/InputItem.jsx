import { useState } from "react";

function InputItem({ additems }) {
  const [task, setTask] = useState("");
  const [error,setError] = useState("");
  const handlesubmit = () => {
    if (!task.trim()) {
      setError("Task can't be empty")
      return;
    }
    setError("")
    additems(task);
    setTask("");
  };

  return (
    <>
      {error && <p data-cy="error">{error}</p>}
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task"
        data-cy ="input-task"
      />
      Task?
      <button onClick={handlesubmit}>Submit</button>
    </>
  );
}
export default InputItem;
