import './index.scss';
import intro from './layout/intro';
import formContainer from './layout/form';
import showFormBtn from './layout/showFormBtn';
import overlay from './layout/overlay';

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
  root.appendChild(showFormBtn());
  root.appendChild(overlay());

  const form = formContainer.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo(todos, todoObj());
    // form.reset();

    formContainer.style.transform = 'translateX(-360px)';
    document.querySelector('.overlay').style.display = 'none';

    const allProjects = document.querySelector('.projects');
    if (allProjects) allProjects.remove();

    root.appendChild(readTodos(todos));
  });

  // show/hide form on-demand
  document.querySelector('#show-form').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    formContainer.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
  });

  document.querySelector('.overlay').addEventListener('click', (e) => {
    formContainer.style.transform = 'translateX(-360px)';
    e.target.style.display = 'none';
  });
};

main();
