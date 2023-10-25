import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import axios from 'axios';
import { TaskItem } from '@task-tracker/shared';

function App() {
  const [taskList, setTaskList] = useState<TaskItem[]>([])
  const [error, setError] = useState<string>('')
  const [taskInput, setTaskInput] = useState<TaskItem>({ task: '', status: '', created: '' })

  axios.defaults.baseURL = process.env.REACT_APP_URL || 'http://localhost:8800/'

  const getTasks = async () => {
    const response = await axios
      .get<TaskItem[]>('')
      .then(response => setTaskList(response.data))
    //return response.data
  }

  const createTask = async () => {
    try {
      await axios.post('', { task: taskInput.task })
      getTasks()
    } catch {
      setError('Something went wrong')
    } finally {
      setTaskInput({task: '', status: '', created: '' })
    }
  }

  useEffect(() => {
    getTasks()
     // .then(setTaskList)
      .catch(error => {
        setTaskList([])
        setError('Nothing to show')
      })

  }, [])

  return (
    <div className='page-wrapper'>
      <TaskInput setTask={(task: string) => setTaskInput( {...taskInput, task} )} handleOnClick={createTask} task={taskInput.task}/>
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
