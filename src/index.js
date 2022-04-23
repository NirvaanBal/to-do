import intro from './layout/intro';
import formContainer from './layout/form';

import './index.scss';

import createTodo from './create/createTodo';
import todoObj from './create/todoObj';
import readTodos from './read/readTodos';

// app state
const todos = {};

const main = () => {
  const root = document.querySelector('#root');

  // intro
  root.appendChild(intro());

  const content = document.createElement('div');
  content.classList.add('main');
  root.appendChild(content);

  // form
  content.appendChild(formContainer);
  const form = formContainer.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo(todos, todoObj());
    // form.reset();

    const allProjects = document.querySelector('.projects');
    if (allProjects) allProjects.remove();

    root.appendChild(readTodos(todos));
  });
};

main();
