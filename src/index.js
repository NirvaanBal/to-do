import './index.scss';

import todoContainer from './create/createTodoForm';
import { createTodo, todos } from './create/createTodo';
import allProjects from './read/readTodo';

const main = () => {
  // add a to-do form
  const root = document.querySelector('#content');
  root.appendChild(todoContainer);
  createTodo();

  // view all projects and related todos
  const addTodoForm = document.querySelector('#todo-form > form');
  addTodoForm.addEventListener('submit', () => {
    const projectsDiv = document.getElementById('projects');
    if (projectsDiv) projectsDiv.remove();
    root.appendChild(allProjects(todos));
  });
};

main();
