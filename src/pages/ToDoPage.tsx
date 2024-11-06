import { useState } from 'react'
import ToDoData from '../components/todos/ToDoData'
import ToDoInput from '../components/todos/ToDoInput'

interface IToDo {
  id: number
  task: string
}

// const test = [{ id: 1, task: 'Learn React' }]

const ToDoPage = () => {
  const [listToDo, setListToDo] = useState<IToDo[]>([])

  const deleteTask = (id: number) => {
    setListToDo(listToDo.filter((item) => item.id !== id))
  }

  return (
    <div
      style={{
        width: '60vw',
        margin: '100px auto',
        padding: '10px 100px 100px',
        border: '3px solid #FFB0B0',
        borderRadius: '10px'
      }}
    >
      <h1 style={{ color: '#FF8A8A', textAlign: 'center' }}>To-Do List</h1>
      <ToDoInput setListToDo={setListToDo} />
      <hr
        style={{
          height: '2px',
          backgroundColor: '#FFB0B0',
          border: 'none',
          margin: '25px'
        }}
      />
      <ToDoData listToDo={listToDo} deleteTask={deleteTask} />
    </div>
  )
}

export default ToDoPage
