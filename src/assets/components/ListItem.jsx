export default function ListItem({ task, onRemove }) {

  return (
    <li className="list-group-item d-flex justify-content-between">
      {task}
      <button className="btn btn-danger" onClick={onRemove}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  )
}