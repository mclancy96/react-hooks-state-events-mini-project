import React from "react";

function Task({ task, removeTask, syncDisplay }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => { removeTask(task.text) }}>X</button>
    </div>
  );
}

export default Task;
