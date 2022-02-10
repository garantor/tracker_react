import Header from './components/Header'
import { useState } from 'react'
import Tasks from './components/Tasks';
function App() {

    const [tasks, setTasks] = useState([
  
        { id:1,
            text: 'Doctor Appointments',
            day: 'Feb 5th at 2:30',
            reminder:true
        },
        { id:2,
            text: 'Meeting At School ',
            day: 'Feb 5th at 2:30',
            reminder:true
        },
        { id:3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30',
            reminder:true
        },
        
        ])
  // Delete Task
  function DeleteTask(id){
    console.log("Delete File", id);
  }
  return (
    <div className='container'> 

    <Header />
    {/* {tasks} this is the task list from above */}
    <Tasks all_tasks={tasks} taskToDelete={DeleteTask}/> 
    
    </div>
   
  );
}

export default App;
