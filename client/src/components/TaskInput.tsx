import React, { useState } from 'react'

export default function TaskInput() {
  const [taskInput, setTaskInput] = useState<string>()

  const testClick = () => {
    console.log('the input is:', taskInput)
    
  }

  return (
    <div>
      <input type="text" onChange={(e) => setTaskInput(e.target.value)} />
      <button onClick={() => testClick()}>Click me!</button>
      <p>{taskInput}</p>
    </div>
  )
}
