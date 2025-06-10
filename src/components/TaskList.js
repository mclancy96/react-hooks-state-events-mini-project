import React from "react";
import Task from "./Task";

function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, idx) => (
        <Task key={`task-${idx}`} task={task} removeTask={removeTask} />
      ))}
    </div>
  );
}

export default TaskList;
