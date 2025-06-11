import React from "react";

function CategoryFilter({ categories, filterTasks }) {

  const clearAllClasses = () => {
    const categoryButtons = document.querySelector('.categories').querySelectorAll('button');
    categoryButtons.forEach(button => {
      button.className = ''
    })
  }

  const handleClick = (clickEvent) => {
    clearAllClasses();
    clickEvent.target.className = 'selected'
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(cat => <button onClick={handleClick} key={cat} id={cat} className={cat === 'All' ? 'selected' : ''}>{cat}</button>)}
    </div>
  );
}

export default CategoryFilter;
