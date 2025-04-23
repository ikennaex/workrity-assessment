import React, { useState } from "react";
import "./tasklistitem.css";
import { baseUrl } from "../App";
import axios from "axios";

const TaskListItems = ({taskData, setTaskData, handleEdit}) => {

  const handleCheck = async (id) => {
    // this checks if the id passed matches the id the array and returns the opposite the checked status for all
    const taskList = taskData.map((data) =>
      data.id === id ? { ...data, checked: !data.checked } : data
    );
    setTaskData(taskList);

    const myItem = taskList.filter((data) => data.id === id)

    try {
      await axios.put(`${baseUrl}/${id}`, myItem[0] )
    } catch (err) {
      console.log(err)
    }

  };



  const handleDelete = async (id) => {
    const taskList = taskData.filter((data) => data.id !== id);
    setTaskData(taskList);

    try {
      await axios.delete(`${baseUrl}/${id}`)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="pt-6">
      {taskData.length ? (
      <ul className="flex flex-col gap-3 mb-4">
      {taskData.map((data) => {
        return (
            <li className="bg-white item w-96 p-5 rounded-xl" key={data.id}>
              <div className="flex gap-3">
                <input
                  className="w-6 h-6"
                  onChange={() => handleCheck(data.id)}
                  type="checkbox"
                  checked={data.checked}
                />
                <label
                  className={`${
                    data.checked ? "line-through text-gray-400" : ""
                  }`}
                  htmlFor=""
                >
                  {data.task}
                </label>
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => handleEdit(data)} className="text-sm font-semibold border-2 border-stone-500 rounded-md py-1 px-6">
                
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(data.id)}
                  className="text-sm font-semibold text-white bg-blue-600 hover:bg-red-600 hover:text-white rounded-md py-1 px-6"
                >
                  Delete
                </button>
              </div>
            </li>
        );
      })}
      </ul>
      ) : "No Task to show" }
    </div>
  );
};

export default TaskListItems;
