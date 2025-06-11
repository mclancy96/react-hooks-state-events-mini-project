import React from "react";

function Task({ task, removeTask, category, text }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => { removeTask(task.text) }}>X</button>
    </div>
  );
}

export default Task;
