import { useState } from "react"

const initialTask = [`Buy a CPU`, `Sell the mouse`, `Fix the stereo`]


function App() {

  const [newTask, setNewTask] = useState(``)
  const [task, setTask] = useState(initialTask)

  function handleSubmit(e){
    e.preventDefault()
    setTask([newTask, ...task])
    setNewTask("")
  }


  function remove (i) {
    
    const fixedTasks = task.filter((task,index) => index !== i )
    setTask(fixedTasks)
  }

  return (
    <>
      <div className="container">
        <h1> ToDo List</h1>
        <div className="card">
          <form action="" onSubmit={handleSubmit}>
            <div className="d-flex gap-1 align-items-stretch mb-2">
              <input type="text" className="form-control" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="add new task"/>
              <button className="btn btn-dark"> Add new Task</button>
            </div>
          </form>
          <ul className="list-group">
            {task.length === 0 ? (<div>Congratulations, all the task have been concluded</div>) : ("")}
            {task.map((task, i) => (
              <li className="list-group-item d-flex justify-content-between" key={i}>
                {task} <button className="btn btn-danger" onClick={()=> remove(i)}><i className="bi bi-trash-fill"></i> </button>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
