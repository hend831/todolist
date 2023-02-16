import React, { useState } from "react";
import "./todolist.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { task: "Take out the trash", done: false },
    { task: "Buy groceries", done: false },
    { task: "Finish homework", done: false }
  ]);

  const addTask = task => {
    setTasks([...tasks, { task, done: false }]);
  };

  const removeTask = taskIndex => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const markDone = taskIndex => {
    const newTasks = [...tasks];
    newTasks[taskIndex].done = true;
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="task-container">
        {tasks.map((task, index) => (
          <div className={`task ${task.done ? "done" : ""}`} key={index}>
            <p className="task-text">{task.task}</p>
            <div className="task-buttons">
              <button className="done-btn" onClick={() => markDone(index)}>
                Done
              </button>
              <button className="remove-btn" onClick={() => removeTask(index)}>
                Remove
              </button>
            </div>
            
          </div>
        ))}
      </div>
      <div className="add-task-container">
        <input type="text" className="add-task-input" placeholder="Add task" onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = "";
          }
        }} />
      </div>
    </div>
  );
};

export default ToDoList;

