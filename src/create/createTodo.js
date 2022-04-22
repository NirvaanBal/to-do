import Todo from '../Todo';
import parseDate from '../parseDate';

const createTodo = () => {
  const form = document.querySelector('#todo-form > form');

  form.addEventListener('submit', (e) => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');
    const month = document.querySelector('#month');
    const project = document.querySelector('#project');
    const priority = document.querySelector('input[name="priority"]:checked');

    e.preventDefault();
    let todo = null;
    const dateValue = parseDate(date.value, month.value);
    todo = new Todo(title.value, description.value, dateValue, priority.value);
    if (!!project.value) todo.project = project.value;

    console.log(todo);
  });
};

export default createTodo;
