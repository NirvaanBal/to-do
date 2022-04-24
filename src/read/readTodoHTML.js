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

  const priority = document.createElement('h3');
  priority.textContent = `Priority: ${task.priority}`;
  rootDiv.appendChild(priority);

  const completed = document.createElement('h3');
  completed.textContent = `Status: ${
    task.completed ? 'Complete' : 'Uncomplete'
  }`;
  rootDiv.appendChild(completed);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'Edit';
  editBtn.setAttribute('data-id', task.id);
  rootDiv.appendChild(editBtn);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&#10006';
  rootDiv.appendChild(closeBtn);
  closeBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  return rootDiv;
};

export default readTodoHTML;