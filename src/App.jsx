import React, { useEffect, useState } from "react";
import Summary from "./Components/Summary";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import axios from "axios";
import EditTask from "./Components/EditTask";

export const baseUrl = "http://localhost:3500/taskData";
const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [taskFormPanel, setTaskFormPanel] = useState(false);
  const [editTaskPanel, setEditTaskPanel] = useState(false);
  const [task, setTask] = useState("");

  // fetch items from mock DB
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(baseUrl);
        setTaskData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);

  // add new task to mock DB
  const addNewTask = async () => {
    const newTaskData = { checked: false, task };

    try {
      await axios.post(baseUrl, newTaskData);

      const taskList = [...taskData, newTaskData];
      setTaskData(taskList);
      setTaskFormPanel(false);
      // if (!task.trim()) return alert("Task cannot be empty");
    } catch (err) {
      console.log(err);
    }
  };

  // handle event change for task input
  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  // Edit fns
  const [currentTask, setCurrentTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  // this fn runs when user clicks to edit 
  const handleEdit = (data) => {
    setCurrentTask(data.task); // prefill the input
    setEditTaskId(data.id); // track which task is being edited
    setEditTaskPanel(true); // show the form
  };

  // Submit edited task
  const submitEditedTask = async (e) => {
    e.preventDefault();

    const updatedTask = { task: currentTask };

    try {
      await axios.put(`${baseUrl}/${editTaskId}`, updatedTask);

      const updatedList = taskData.map((t) =>
        t.id === editTaskId ? { ...t, task: currentTask } : t
      );
      setTaskData(updatedList);
      setEditTaskPanel(false);
    } catch (err) {
      console.log("Error updating task:", err);
    }
  };

  return (
    <div className="flex">
      <Summary taskData={taskData} />
      <TaskList
        setTaskFormPanel={setTaskFormPanel}
        taskData={taskData}
        setTaskData={setTaskData}
        addNewTask={addNewTask}
        handleEdit = {handleEdit}
        setEditTaskPanel={setEditTaskPanel}
      />
      {taskFormPanel && (
        <TaskForm
          task={task}
          setTask={setTask}
          handleChange={handleChange}
          addNewTask={addNewTask}
        />
      )}

      {editTaskPanel && (
        <EditTask
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          submitEditedTask={submitEditedTask}
        />
      )}
    </div>
  );
};

export default App;
