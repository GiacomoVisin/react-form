import { useState } from "react"
import Form from "./assets/components/form"
import ListItem from "./assets/components/listItem"


const initialTask = [`Buy a CPU`, `Sell the mouse`, `Fix the stereo`]


function App() {

  const [newTask, setNewTask] = useState(``)
  const [task, setTask] = useState(initialTask)

  function HandleSubmit(e) {
    e.preventDefault()
    setTask([newTask, ...task])
    setNewTask("")
  }


  function remove(i) {

    const fixedTasks = task.filter((task, index) => index !== i)
    setTask(fixedTasks)
  }

  return (
    <>
      <div className="container">
        <h1> ToDo List</h1>
        <div className="card">
          <Form onHandleSubmit={HandleSubmit} newTask={newTask} setNewTask={setNewTask} />
          <ul className="list-group">
            {task.length === 0 ? (<div>Congratulations, all the task have been concluded</div>) : ("")}
            {task.map((task, i) => (
              <ListItem task={task} onRemove={() => remove(i)} key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
