import { useState } from "react"
import Form from "./assets/components/form"

const initialTask = [`Buy a CPU`, `Sell the mouse`, `Fix the stereo`]


function App() {

  const [newTask, setNewTask] = useState(``)
  const [task, setTask] = useState(initialTask)

  function HandleSubmit(e){
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
          <Form onHandleSubmit={HandleSubmit} newTask={newTask} setNewTask={setNewTask}/>
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
