import React, { useState } from 'react'

const TaskForm = ({task, handleChange, addNewTask}) => {

  return (
    <div>
          <div className='mx-4 py-5 px-5 my-4 rounded-xl bg-stone-200 w-72'>
            <form onSubmit={addNewTask}  action="">
            <label htmlFor="taskTitle" className="block text-sm font-medium">Task title</label>
            <input type="text" name="name" value= {task} onChange= {handleChange} id="taskTitle" required className="w-full border rounded-lg p-2 mt-1" />
            <button className='text-sm font-semibold bg-yellow-300 hover:bg-blue-600 hover:text-white rounded-md mt-4 py-1 px-6'>Set Task</button>
            </form>
          </div>
    </div>
  )
}

export default TaskForm
