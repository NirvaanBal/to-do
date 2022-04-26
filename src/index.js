import './index.scss';
import intro from './layout/intro';
import formContainer from './layout/form';
import showFormBtn from './layout/showFormBtn';
import overlay from './layout/overlay';

import createTodo from './create/createTodo';
import todoObj from './create/todoObj';
import readTodos from './read/readTodos';
import editTodo from './update/editTodo';

// app state
export let todos = {};

if (localStorage.getItem('projects')) {
  todos = JSON.parse(localStorage.getItem('projects'));
}

const main = () => {
  const root = document.getElementById('root');

  // intro
  root.appendChild(intro());

  if (localStorage.getItem('projects')) {
    document.querySelector('.intro').style.display = 'none';
    root.appendChild(readTodos(JSON.parse(localStorage.getItem('projects'))));
  }

  const content = document.createElement('div');
  content.classList.add('main');
  root.appendChild(content);

  // form
  content.appendChild(formContainer);
  root.appendChild(showFormBtn());
  root.appendChild(overlay());

  const form = formContainer.querySelector('form');
  form.addEventListener('submit', (e) => {
    let oldTodos = JSON.stringify(todos);
    e.preventDefault();
    if (form.dataset.edit === 'false') {
      createTodo(todos, todoObj());
    } else if (form.dataset.edit === 'true') {
      editTodo(form.dataset.id, todoObj());
      form.removeAttribute('data-id');
      form.dataset.edit = 'false';
    }
    form.reset();

    if (todos) document.querySelector('.intro').style.display = 'none';

    formContainer.style.transform = 'translateX(-360px)';
    document.querySelector('.overlay').style.display = 'none';

    const allProjects = document.querySelector('.projects');
    if (allProjects) allProjects.remove();

    if (oldTodos !== JSON.stringify(todos)) {
      localStorage.setItem('projects', JSON.stringify(todos));
      root.appendChild(readTodos(JSON.parse(localStorage.getItem('projects'))));
    }
  });

  // show/hide form on-demand
  document.querySelector('#show-form').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    formContainer.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
    form.querySelector('button').textContent = 'Create';
    form.querySelector('#project-field').style.display = 'flex';
    form.querySelector('.selection').parentElement.style.display = 'flex';
  });

  document.querySelector('.overlay').addEventListener('click', (e) => {
    form.reset();
    formContainer.style.transform = 'translateX(-360px)';
    form.dataset.edit = 'false';
    form.querySelector('button').textContent = 'Create';
    form.querySelector('#project-field').style.display = 'flex';
    form.querySelector('.selection').parentElement.style.display = 'flex';

    e.target.style.display = 'none';
  });
};

main();
