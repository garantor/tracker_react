import React from 'react';
import { FaTimes } from 'react-icons/fa'
// This is individual tasks
// the tasks and onDelete are the parameters expected to be passed into the Task component anywhere it is been called
// Task is a function here and the tasks and onDelete are keywords arguments just like in python
function Task({ tasks, onDelete }) {
  return <div className='task'>
      <h3>
        {tasks.text}  
        <FaTimes style={{ color:'red', cursor:'pointer'}} onClick={onDelete}/>
      </h3>
      <p>{tasks.day}</p>

  </div>;
}

export default Task;
