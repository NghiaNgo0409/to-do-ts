import { useState } from 'react'

interface IToDo {
  id: number
  task: string
}

interface IProps {
  setListToDo: React.Dispatch<React.SetStateAction<IToDo[]>>
}

const ToDoInput = ({ setListToDo }: IProps) => {
  const [data, setData] = useState<string>('')

  const submitData = () => {
    if (data) {
      setListToDo((prevState) => [
        ...prevState,
        { id: prevState.length + 1, task: data }
      ])
      setData('')
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        margin: '0 auto'
      }}
    >
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{ width: '85%' }}
        type="text"
        placeholder="Enter a new task"
      />
      <button onClick={submitData}>Add</button>
    </div>
  )
}

export default ToDoInput
