import React from 'react'
import TaskListItems from './TaskListItems'
import { FiPlus } from "react-icons/fi";


const TaskList = ({taskData, setTaskData, setEditTaskPanel, setTaskFormPanel, handleEdit}) => {
  const togglePanel = () => {
    setTaskFormPanel(true)
  }
  return (
    <div className='container'>
        <div className='mx-auto p-5 bg-stone-200 h-full mt-4 rounded-xl'>
            <div className=' flex flex-col items-center'>
                <h1 className='text-3xl font-extrabold'>Task Dashboard</h1>

                <button onClick={togglePanel} className='flex justify-center text-sm font-semibold mt-4 text-white bg-blue-600 hover:bg-green-600 hover:text-white rounded-md py-3 px-6'>
                <FiPlus size={20}/>
                <p >Add new task</p>
                </button>

                {/* <div className='mt-6 border w-full'>Search</div> */}

                <TaskListItems taskData = {taskData} setTaskData = {setTaskData} setEditTaskPanel = {setEditTaskPanel} handleEdit={handleEdit} />

            </div>
        </div>
    </div>
  )
}

export default TaskList
