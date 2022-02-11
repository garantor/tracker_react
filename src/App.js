import Header from './components/Header'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About'

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

     <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                 <Tasks all_tasks={tasks} 
                  taskToDelete={DeleteTask} onToggle={toggleReminder} /> )
                  : ('No Task To Show'
                  )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


//     <Router>
//       <div className='container'> 

//         <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
//           {showAddTask && <AddTask onAdd={addTask}/>}
//     {/* {tasks} this is the task list from above */}
 
//         <Route path='/' exact render={(props) => (
//       <>
//          {tasks.length > 0 ? (<Tasks all_tasks={tasks} 
//     taskToDelete={DeleteTask} onToggle={toggleReminder} /> )
//     : ('No Task To Show'
//     )}
      
//       </>


//     )} />
//     <Route path='/about' component={About} />

//     <Footer />
//     </div>
//     </Router>
   
//   );
// }

// export default App;
