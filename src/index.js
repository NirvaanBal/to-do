import todoContainer from './create/createTodoForm';
import createTodo from './create/createTodo';

const main = () => {
  const root = document.querySelector('#content');
  root.appendChild(todoContainer);

  createTodo();
};

main();
