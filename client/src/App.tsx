import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import axios from 'axios';
import { TaskItem } from '@task-tracker/shared';

function App() {
  const [taskList, setTaskList] = useState<TaskItem[]>([])
  const [error, setError] = useState<string>('')

  axios.defaults.baseURL = process.env.REACT_APP_URL || 'http://localhost:8800/'

  const getTasks = async () => {
    const response = await axios
      .get<TaskItem[]>('')
    return response.data
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
    <div className='page-wrapper'>
      <TaskInput />
      {/* {taskList && taskList.map(item => (
        <TaskList tasks={taskList}/>
      ))} */}
      <TaskList tasks={taskList}/>
    </div>
  );
}

export default App;
