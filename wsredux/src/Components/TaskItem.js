import React from 'react'
import { useDispatch } from 'react-redux'
import { completetask, deletetask } from '../Redux/Action/Action'
import EditTask from './EditTask'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <div style={{textDecoration: todo.isDone ? "line-through" : null} }>{todo.name}</div>
      <button onClick={()=>dispatch(completetask(todo.id))} >{todo.isDone ? "UnDo" : "Complete"}</button>
      <EditTask todo={todo}/>
      <button onClick={()=>dispatch(deletetask(todo.id))} >Delete</button>
    </div>
  )
}

export default TaskItem
