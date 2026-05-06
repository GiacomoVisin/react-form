export default function Form ({onHandleSubmit,newTask,setNewTask}) {


    return(
            <form action=""  onSubmit={onHandleSubmit}>
            <div className="d-flex gap-1 align-items-stretch mb-2">
              <input type="text" className="form-control" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="add new task"/>
              <button className="btn btn-dark"> Add new Task</button>
            </div>
          </form>
    )
}