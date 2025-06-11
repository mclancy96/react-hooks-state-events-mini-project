import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //don't like this implementation, but it preserves the removed/added tasks like a db
  //alternatively, the filtered out tasks could just be hidden
  const [taskList, setTaskList] = useState(TASKS)
  const [displayedTaskList, setDisplayedTaskList] = useState(TASKS)

  const removeTask = (taskText) => {
    setTaskList(taskList.filter(task => task.text !== taskText))
    setDisplayedTaskList(displayedTaskList.filter(task => task.text !== taskText))
  }

  const addTask = (task) => {
    const selectedCategory = document.querySelector('.categories').querySelector('.selected').id
    setTaskList([...taskList, task])
    if (selectedCategory === 'All' || (task.category && task.category === selectedCategory)) {
      setDisplayedTaskList([...displayedTaskList, task])
    }
  }

  const filterTasks = (category) => {
    setDisplayedTaskList(taskList.filter(task => {
      if (category === 'All') return true;
      return task.category === category
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
      <NewTaskForm categories={CATEGORIES} addTask={addTask} />
      <TaskList tasks={displayedTaskList} removeTask={removeTask} />
    </div>
  );
}

export default App;
