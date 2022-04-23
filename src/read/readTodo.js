const btn = (parent, purpose, action) => {
  const btn = document.createElement('button');
  btn.textContent = purpose;
  btn.setAttribute('data-type', action);
  btn.setAttribute('title', action);
  btn.addEventListener('click', (e) => {
    if (action === 'priority') {
      console.log(e.target.parentElement.parentElement.dataset.id);
    }
  });
  parent.appendChild(btn);
};

const allProjects = (projects) => {
  const projectsHTML = document.createElement('div');
  projectsHTML.setAttribute('id', 'projects');

  for (let project in projects) {
    const rootDiv = document.createElement('div');
    rootDiv.classList.add('project');
    projectsHTML.appendChild(rootDiv);

    const heading = document.createElement('h3');
    heading.textContent = project;
    rootDiv.appendChild(heading);

    for (let todo of projects[project]) {
      const todoContainer = document.createElement('div');
      todoContainer.classList.add('todo-item');
      todoContainer.setAttribute('data-id', todo.id);
      if (todo.priority === 'high') todoContainer.classList.add('high-p');
      rootDiv.appendChild(todoContainer);

      const task = document.createElement('div');
      task.setAttribute('class', 'task');
      todoContainer.appendChild(task);
      const heading = document.createElement('h4');
      heading.textContent = todo.title;
      task.appendChild(heading);
      const dueIn = document.createElement('small');
      dueIn.textContent = todo.dueDate;
      task.appendChild(dueIn);

      const actions = document.createElement('div');
      actions.classList.add('actions');
      todoContainer.appendChild(actions);
      btn(actions, 'P', 'priority');
      btn(actions, 'C', 'complete');
      btn(actions, 'E', 'edit');
      btn(actions, 'D', 'delete');
    }
  }

  return projectsHTML;
};

export default allProjects;
