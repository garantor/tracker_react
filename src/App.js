import Header from './components/Header'
import { useState, useEffect } from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
    
      getTasks()
    }, [])
    //Fetch Task from api
  async function fetchTasks() {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
      }


  async function fetchSingleTask(id) {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
      }


  // Add Task
  async function addTask(task) {
    const res = await fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task }
    // setTasks([...tasks, newTask])
  }

  
  // Delete Task
  async function DeleteTask(id){
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  
  async function toggleReminder(id) {
    const taskToToggle = await fetchSingleTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updatedTask)
    })
    const data = await res.json()

    setTasks(
      tasks.map((task) => 
      task.id === id ? {
        ...task, reminder: !data.reminder
      } : task
      )
    )
  }
  
  return (
    <div className='container'> 

    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {/* {tasks} this is the task list from above */}
    {tasks.length > 0 ? <Tasks all_tasks={tasks} 
    taskToDelete={DeleteTask} onToggle={toggleReminder} /> : 'No Task To Show'}
    
    </div>
   
  );
}

export default App;
