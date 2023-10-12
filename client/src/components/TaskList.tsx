import React, { useState, useEffect } from 'react'
import { TaskItem } from '@task-tracker/shared'
import axios from 'axios'

export default function TaskList({tasks}: { tasks: TaskItem[] }) {

  const RenderTask = ({task} : {task: TaskItem}) => {
    return (
      <div>
        <li>{task.task}</li>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {tasks && tasks?.map((item) => (
          <RenderTask key={item._id} task={item} />
        ))}
      </ul>
    </div>
  )
}
