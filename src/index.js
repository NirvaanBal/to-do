import './index.scss';

import todoContainer from './create/createTodoForm';
import { createTodo, todos } from './create/createTodo';
import allProjects from './read/readTodo';
import overlay from './overlayHTML';

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
    addTodoForm.parentElement.style.transform = 'translateX(-400px)';
    overlay.style.display = 'none';
  });

  // show form button
  root.appendChild(overlay);
  const showFormBtn = document.createElement('button');
  showFormBtn.textContent = '+';
  showFormBtn.setAttribute('id', 'show-form');
  root.appendChild(showFormBtn);
  showFormBtn.addEventListener('click', () => {
    addTodoForm.parentElement.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
  });

  // remove form
  overlay.addEventListener('click', () => {
    addTodoForm.parentElement.style.transform = 'translateX(-400px)';
    overlay.style.display = 'none';
  });
};

main();
