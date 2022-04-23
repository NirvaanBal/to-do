const readTodos = (projects) => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('projects');

  for (let project in projects) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    rootDiv.appendChild(projectDiv);

    const heading = document.createElement('h3');
    heading.textContent = project;
    projectDiv.appendChild(heading);

    for (let todo of projects[project]) {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      projectDiv.appendChild(todoDiv);

      if (todo.priority === 'high') {
        todoDiv.classList.add('high');
      }

      const flexDiv = document.createElement('div');
      todoDiv.appendChild(flexDiv);

      const heading = document.createElement('h4');
      heading.textContent = todo.title;
      flexDiv.appendChild(heading);

      const date = document.createElement('p');
      date.textContent = todo.dueDate;
      flexDiv.appendChild(date);
    }
  }

  return rootDiv;
};

export default readTodos;
