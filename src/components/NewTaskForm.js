import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const [newTaskDetails, setNewTaskDetails] = useState('')
  const [newTaskCategory, setNewTaskCategory] = useState(categories[1])

  const handleDetailChange = (event) => {
    setNewTaskDetails(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setNewTaskCategory(event.target.querySelector('option:checked').value)
    console.log(event.target.querySelector('option:checked').value)
  }

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    addTask({ category: newTaskCategory, text: newTaskDetails })
    setNewTaskDetails('')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange} value={newTaskDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.map(cat => {
            if (cat !== 'All') return <option key={cat} value={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
