interface IToDo {
  id: number
  task: string
}

interface IProps {
  listToDo: IToDo[]
  deleteTask: (id: number) => void
}

const ToDoData = ({ listToDo, deleteTask }: IProps) => {
  return (
    <div
      style={{
        width: '50%',
        margin: '0 auto'
      }}
    >
      {listToDo.map((item, index) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}
          >
            <div key={item.id}>
              No.{index + 1} {item.task}
            </div>
            <button onClick={() => deleteTask(index + 1)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoData
