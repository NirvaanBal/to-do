import './readTodo.scss';

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
      rootDiv.appendChild(todoContainer);
      const heading = document.createElement('h4');
      heading.textContent = todo.title;
      todoContainer.appendChild(heading);
      const dueIn = document.createElement('p');
      dueIn.textContent = todo.dueDate;
      todoContainer.appendChild(dueIn);
    }
  }

  return projectsHTML;
};

export default allProjects;
