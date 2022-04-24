const readTodoHTML = (task) => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('todo-xl');

  const title = document.createElement('h1');
  title.textContent = `${task.title} (${task.project})`;
  rootDiv.appendChild(title);

  const description = document.createElement('p');
  description.textContent = task.description;
  rootDiv.appendChild(description);

  const dueDate = document.createElement('h3');
  dueDate.textContent = `Due date: ${task.dueDate}`;
  rootDiv.appendChild(dueDate);

  const completed = document.createElement('h3');
  completed.textContent = `Status: ${
    task.completed ? 'Complete' : 'Uncomplete'
  }`;
  rootDiv.appendChild(completed);

  const priority = document.createElement('h3');
  priority.textContent = `Priority: ${task.priority.toUpperCase()}`;
  rootDiv.appendChild(priority);

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&#10006';
  rootDiv.appendChild(closeBtn);
  closeBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  return rootDiv;
};

export default readTodoHTML;
