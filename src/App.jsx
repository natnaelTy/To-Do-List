import { useState } from 'react'
import './index.css'
import { FaTrashCan } from "react-icons/fa6";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(){
    if(newTask.trim() !== ''){
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }
   
  }
  function handleDelete(index){
    const remove = tasks.filter((_, i) => i !== index);
    setTasks(remove);
  }
  function handleUp(index){
    if(index > 0){
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index -1]] = [updateTasks[index - 1], updateTasks[index]];
      setTasks(updateTasks);
    }
  }
  function handleDown(index){
    if(index < tasks.length - 1){
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
      setTasks(updateTasks);
    }
  }
  return (
      <div className='bg-slate-950 h-screen overflow-hidden'>
           <div className='flex flex-col items-center justify-center mt-10 p-6'>
           <h1 className='text-5xl font-semibold mb-8 text-white gap-8'>To-Do-List</h1>
           <div className='flex gap-2 p-6'>
                <input type="text" 
                       placeholder='Enter Task'
                       onChange={(e) => setNewTask(e.target.value)} 
                       value={newTask}
                       className='py-3 px-4 border-[1px] border-gray-200 w-[300px] lg:w-[400px] rounded-md outline-none'/>
                 <button onClick={handleAddTask} className='bg-blue-700 rounded-md px-4 py-2 text-white font-semibold'>Add</button>      
           </div>      
                 <div>
                     <ul className='flex items-start justify-start flex-col'>
                         {tasks.map((task, index) => (
                          <li key={index} className='bg-blue-700 text-white py-3 mt-4 font-semibold px-4 w-[375px] lg:w-[475px] rounded-md flex items-center justify-between'>{task}
                          <div className='flex items-center justify-center gap-4 cursor-pointer'>
                           <span onClick={() => handleUp(index)}><FaAngleDoubleUp/></span>
                           <span onClick={() => handleDown(index)}><FaAngleDoubleDown/></span>
                           <span onClick={() => handleDelete(index)} className='text-red-800 hover:text-red-600'><FaTrashCan/></span>
                           </div>
                          </li>
                         ))}
                     </ul>
                  </div>      
           </div>
      </div>
  )
}

export default App
