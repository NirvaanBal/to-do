import Todo from '../Todo';

const createTodo = (todos, todoObj) => {
  let todo = null;
  todo = new Todo(
    todoObj.title,
    todoObj.description,
    todoObj.dueDate,
    todoObj.priority
  );
  if (!!project.value) todo.project = todoObj.project.toLowerCase();
  if (todos[todo.project]) todos[todo.project].push(todo);
  else {
    todos[todo.project] = [];
    todos[todo.project].push(todo);
  }

  return todo;
};

export default createTodo;
