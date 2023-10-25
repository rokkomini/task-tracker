import React from 'react'
import { TaskItem, TaskStatus } from '@task-tracker/shared'

export default function TaskList({ tasks }: { tasks: TaskItem[] }) {

  const RenderTask = ({ task }: { task: TaskItem }) => {
    return (
      <div>
        <li>{task.task}</li>
      </div>
    )
  }

  // const TodoTask = ({task} : {task: TaskItem}) => {
  //   return (
  //   <div>
  //     {if (task.status == 'todo')} (
  //       <div>
  //         <h1>Todo</h1>
  //           <li>{task.task}</li>
  //       </div>
  //     )
  //   </div>
  // )
  // }

  //   Object.keys(TaskStatus).forEach((key, index) => {
  //     console.log(`${key} has index ${index}`)
  // })
  // const values = Object.values(TaskStatus)

  // values.map(value => {
  //   console.log(value)
  // })


  return (
    <div className='flex space-around'>
      <div className="flex column taskBox">
        <h1>Todo</h1>
        {tasks && tasks?.map((item) => (
          item.status == 'todo' ? (
            <ul>
              <RenderTask key={item._id} task={item} />
            </ul>
          ) : (
            ''
          )
        ))}
      </div>
      <div className="flex column taskBox">
        <h1>Doing</h1>
        {tasks && tasks?.map((item) => (
          item.status == 'doing' ? (
            <ul>
              <RenderTask key={item._id} task={item} />
            </ul>
          ) : (
          ''
          )
        ))}
      </div>
      <div className="flex column taskBox">
        <h1>Done</h1>
        {tasks && tasks?.map((item) => (
          item.status == 'done' ? (
            <ul>
              <RenderTask key={item._id} task={item} />
            </ul>
          ) : (
            ''
          )
        ))}
      </div>
    </div>
  )
}
