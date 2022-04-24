import { todos } from '../index';

const readTodo = (taskId) => {
  for (let project in todos) {
    for (let todo of todos[project]) {
      if (todo.id === taskId) return todo;
    }
  }
};

export default readTodo;
