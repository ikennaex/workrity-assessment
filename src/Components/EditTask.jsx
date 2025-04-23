import React, { useState } from "react";

const EditTask = ({ currentTask, setCurrentTask, submitEditedTask}) => {

  return (
    <div>
      <div className="mx-4 py-5 px-5 my-4 rounded-xl bg-stone-200 w-72">
        <form onSubmit={submitEditedTask} action="">
          <label className="block text-sm font-medium">Edit Task</label>
          <input
            type="text"
            name="name"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            required
            className="w-full border rounded-lg p-2 mt-1"
          />
          <button className="text-sm font-semibold bg-yellow-300 hover:bg-blue-600 hover:text-white rounded-md mt-4 py-1 px-6">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
