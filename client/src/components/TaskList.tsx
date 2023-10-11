import React, { useState, useEffect } from 'react'
import { TaskItem } from '@task-tracker/shared'
import axios from 'axios'

export default function TaskList(props: { name: string }) {
  const [taskList, setTaskList] = useState<TaskItem[]>([])
  const [error, setError] = useState<string>('')

  axios.defaults.baseURL = process.env.REACT_APP_URL || 'http://localhost:8800/'

  const getTasks = async () => {
    const response = await axios
      .get<TaskItem[]>('')
    return response.data
  }

  const RenderTask = ({task} : {task: TaskItem}) => {
    return (
      <div>
        <p>{task.task}</p>
      </div>
    )
  }

  useEffect(() => {
    getTasks()
      .then(setTaskList)
      .catch(error => {
        setTaskList([])
        setError('Nothing to show')
      })
     
  }, [])

  return (
    <div>Hello {props.name}
      <div>
        {taskList && taskList?.map((item) => (
          <RenderTask task={item} />
        ))}
      </div>
    </div>
  )
}
