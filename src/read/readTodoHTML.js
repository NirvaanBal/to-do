const readTodoHTML = (task) => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('todo-xl');

  const title = document.createElement('h2');
  title.textContent = `${task.title} (${task.project})`;
  rootDiv.appendChild(title);

  const dueDate = document.createElement('h3');
  dueDate.textContent = `Due date: ${task.dueDate}`;
  rootDiv.appendChild(dueDate);

  const description = document.createElement('p');
  description.textContent = task.description;
  rootDiv.appendChild(description);

  const completed = document.createElement('h3');
  completed.textContent = `Status: ${
    task.completed ? 'Complete' : 'Uncomplete'
  }`;
  rootDiv.appendChild(completed);

  const priority = document.createElement('h4');
  priority.textContent = `Priority: ${task.priority.toUpperCase()}`;
  rootDiv.appendChild(priority);

  return rootDiv;
};

export default readTodoHTML;
