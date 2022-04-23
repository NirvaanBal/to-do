import './index.scss';

import header from './layout/header';
import formContainer from './layout/form';
import todoObj from './create/todoObj';
import createTodo from './create/createTodo';

// app state
const todos = {};

const main = () => {
  const root = document.querySelector('#root');

  // header
  root.appendChild(header());

  const content = document.createElement('div');
  content.classList.add('main');
  root.appendChild(content);

  // form
  content.appendChild(formContainer);
  const form = formContainer.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo(todos, todoObj());
  });
};

main();
