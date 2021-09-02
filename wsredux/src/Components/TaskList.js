import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const taskList = useSelector(state => state.TaskReducer.taskList)
  return (
    <div>
        {
        taskList.map( (el) => <TaskItem todo={el}/> 
        )
        }
    </div>
  )
}

export default TaskList
