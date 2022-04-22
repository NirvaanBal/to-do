import Todo from '../Todo';
import parseDate from '../parseDate';

const todos = {};
const createTodo = () => {
  const form = document.querySelector('#todo-form > form');

  let todo = null;
  form.addEventListener('submit', (e) => {
    const title = form.querySelector('#title');
    const description = form.querySelector('#description');
    const date = form.querySelector('#date');
    const month = form.querySelector('#month');
    const project = form.querySelector('#project');
    const priority = form.querySelector('input[name="priority"]:checked');

    e.preventDefault();
    const dateValue = parseDate(date.value, month.value);
    todo = new Todo(title.value, description.value, dateValue, priority.value);
    if (!!project.value) todo.project = project.value;
    if (todos[todo.project]) todos[todo.project].push(todo);
    else {
      todos[todo.project] = [];
      todos[todo.project].push(todo);
    }

    form.reset();
  });
};

export { createTodo, todos };
