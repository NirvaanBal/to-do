import { todos } from '../index';
import updateAction from '../update/updateAction';

const actionBtn = (action, type, taskId) => {
  const btn = document.createElement('button');
  btn.textContent = type;
  btn.setAttribute('data-action', action);
  btn.setAttribute('data-id', taskId);

  btn.addEventListener('click', (e) => {
    const el = e.target.parentElement.parentElement;
    updateAction(el, todos, e.target.dataset.action);

    if (action === 'priority') el.classList.toggle('high');
    else if (action === 'completed') el.classList.toggle('completed');
    else if (action === 'delete') {
      const project = el.parentElement;
      el.remove();
      if (action === 'delete' && !project.firstChild.nextElementSibling) {
        project.remove();
      }
    }
  });

  return btn;
};

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
      todoDiv.setAttribute('data-id', todo.id);
      todoDiv.classList.add('todo');
      projectDiv.appendChild(todoDiv);

      if (todo.priority === 'high') todoDiv.classList.add('high');
      if (todo.completed) todoDiv.classList.add('completed');

      const flexDiv = document.createElement('div');
      todoDiv.appendChild(flexDiv);

      const heading = document.createElement('h4');
      heading.textContent = todo.title;
      flexDiv.appendChild(heading);

      const date = document.createElement('p');
      date.textContent = todo.dueDate;
      flexDiv.appendChild(date);

      const actions = document.createElement('div');
      actions.setAttribute('class', 'actions');
      todoDiv.appendChild(actions);

      const changePriorityBtn = actionBtn('priority', 'p', todo.id);
      actions.appendChild(changePriorityBtn);

      const changeStatusBtn = actionBtn('completed', 'c', todo.id);
      actions.appendChild(changeStatusBtn);

      const deleteTodoBtn = actionBtn('delete', 'd', todo.id);
      actions.appendChild(deleteTodoBtn);
    }
  }

  return rootDiv;
};

export default readTodos;
