import './index.scss';
import intro from './layout/intro';
import formContainer from './layout/form';
import showFormBtn from './layout/showFormBtn';
import overlay from './layout/overlay';

import createTodo from './create/createTodo';
import todoObj from './create/todoObj';
import readTodos from './read/readTodos';
import updatePriority from './update/updatePriority';

// app state
const todos = {
  ruby: [
    {
      id: 1,
      title: 'learn ruby',
      description: 'i am learning ruby',
      dueDate: 'apr 30',
      priority: 'high',
      project: 'ruby',
    },
    {
      id: 2,
      title: 'learn rails',
      description: 'i will learn ruby on rails',
      dueDate: 'jun 2',
      priority: 'low',
      project: 'ruby',
    },
  ],
  'due tasks': [
    {
      id: 3,
      title: 'learn react',
      description: 'Learning react...',
      dueDate: 'apr 28',
      priority: 'low',
    },
  ],
};

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

    if (todos) document.querySelector('.intro').style.display = 'none';

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

  /*************************
   *
   * TESTING
   */
  root.appendChild(readTodos(todos));

  // toggle priority
  const priorityBtns = document.querySelectorAll(
    'button[data-action="priority"]'
  );
  priorityBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const el = e.target.parentElement.parentElement;
      el.classList.toggle('high');
      updatePriority(el, todos);
    });
  });
};

main();
