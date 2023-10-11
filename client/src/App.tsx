import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='page-wrapper'>
      Hello from react
      <TaskList name='Mika'/>
    </div>
  );
}

export default App;
