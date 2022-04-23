import parseDate from '../utils/parseDate';

const todoObj = () => {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const date = document.querySelector('#date').value;
  const month = document.querySelector('#month').value;
  const dueDate = parseDate(date, month);
  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const project = document.querySelector('#project').value;

  return { title, description, dueDate, priority, project };
};

export default todoObj;
