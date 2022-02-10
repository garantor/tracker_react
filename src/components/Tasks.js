//  This is a component for all the Tasks together
import Task from "./Task";
import React from 'react';
import { useState } from 'react'

// the all_tasks and taskToDelete are the parameters expected to be passed into the Tasks component anywhere it is been called

function Tasks({ all_tasks, taskToDelete}) {
  return (
  <>
    {all_tasks.map((all_tasks) => (

    // Calling our Task component and it keyword argument and passing in the arguments it requires
    <Task key={all_tasks.id} tasks={all_tasks} onDelete={taskToDelete} />

    ))}
  </>)
}

export default Tasks;
