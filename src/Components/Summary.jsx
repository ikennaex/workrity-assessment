import React from 'react'
import { FaTasks } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

const Summary = ({taskData}) => {
  const totalTask = taskData.length
  const completedTask = taskData.filter(data => data.checked).length;
  return (
    <div className=''>
        <div className='mx-4 py-5 px-5 my-4 rounded-xl bg-stone-200 w-72'>
          <div className='h-lvh'>
            <p className= "font-bold">Hi there</p>

            <div className='mt-3'>
            <div className='flex items-center gap-1 text-white bg-blue-600 py-4 px-3 rounded-xl mb-3 w-60'>
            <MdOutlineAccessTime size={20} />
                <p className='ml-3' >Total Tasks </p>
                <p className='font-bold'>{totalTask}</p>
            </div>

            <div className='flex items-center gap-1 text-white bg-green-600 py-4 px-3 rounded-xl w-60'>
            <FaTasks size={20} />
                <p className='ml-3'>Completed Tasks</p>
                <p className='font-bold'>{completedTask}/{totalTask}</p>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Summary
