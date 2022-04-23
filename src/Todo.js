class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.id = new Date().toISOString();
    this.completed = false;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = this.project || 'due tasks';
    this.notes = [];
  }

  isComplete() {
    this.completed = !this.completed;
  }

  changePriority(value) {
    this.priority = value;
  }
}

export default Todo;
