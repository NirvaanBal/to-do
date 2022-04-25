import { todos } from '../index';
import todoObj from '../create/todoObj';

const editTodo = (taskId, todoObj) => {
  for (let project in todos) {
    for (let todo of todos[project]) {
      if (todo.id === taskId) {
        todo.title = todoObj.title;
        todo.description = todoObj.description;
        todo.dueDate = todoObj.dueDate;
        todo.priority = todoObj.priority;
        todo.project = todoObj.project;
      }
    }
  }
};

export default editTodo;
