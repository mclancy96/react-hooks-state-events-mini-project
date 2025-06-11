import React from "react";
import Task from "./Task";

function TaskList({ tasks, removeTask, syncDisplay }) {
  return (
    <div className="tasks">
      {tasks.map((task, idx) => (
        <Task key={`task-${idx}`} task={task} removeTask={removeTask} syncDisplay={syncDisplay} />
      ))}
    </div>
  );
}

export default TaskList;
