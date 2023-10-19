import { TaskItem } from '@task-tracker/shared';
import React, { useState } from 'react'

export interface InputProps {
  task: string;
  setTask : (task: string) => void;
  handleOnClick: (taskItem: TaskItem) => void
}

export default function TaskInput(input: InputProps) {
  const [taskInput, setTaskInput] = useState<TaskItem>({task: '', status: '', created: ''})

  return (
    <div>
      <input type="text" onChange={(e) => input.setTask(e.target.value)} />
      <button onClick={() => input.handleOnClick(taskInput)}>Click me!</button>
    </div>
  )
}
