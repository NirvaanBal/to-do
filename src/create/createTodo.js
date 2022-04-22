import Todo from '../Todo';
import parseDate from '../parseDate';

import todoContainer from './createTodoForm.js';

const form = document.querySelector('#todo-form > form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const month = document.querySelector('#month');
const priority = document.querySelector('input[type="radio"]:checked');
const project = document.querySelector('#project');

const createTodo = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateValue = parseDate(date.value, month.value);
    const todo = new Todo(
      title.value,
      description.value,
      parseDate(dateValue),
      priority.value,
      project.value
    );

    console.log(todo);
  });
};

export default createTodo;
