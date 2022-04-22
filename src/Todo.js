class Todo {
  constructor(title, description, dueDate, priority, project = 'untitled') {
    this.completed = false;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = [];
  }

  isComplete() {
    this.completed = !this.isComplete;
  }

  changePriority(value) {
    this.priority = value;
  }
}

export default Todo;
