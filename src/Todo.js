class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.completed = false;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = [];
    this.project = this.project || 'untitled';
  }

  isComplete() {
    this.completed = !this.isComplete;
  }

  changePriority(value) {
    this.priority = value;
  }
}

export default Todo;
