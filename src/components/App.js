import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)

  const removeTask = (taskText) => {
    setTaskList(taskList.filter(task => task.text !== taskText))
  }

  const filterTasks = (category) => {
    setTaskList(taskList.map(task => {
      if (category === 'All') return true;
      return task.category === category
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
      <NewTaskForm />
      <TaskList tasks={taskList} removeTask={removeTask} />
    </div>
  );
}

export default App;
