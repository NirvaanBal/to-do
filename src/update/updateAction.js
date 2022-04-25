const updateAction = (element, projects, action) => {
  const project = element.parentElement.firstChild.textContent;
  const taskId = element.dataset.id;

  for (let task of projects[project]) {
    if (action === 'priority' && task.id === taskId) {
      // if (task.priority === 'low') task.changePriority('high');
      // else task.changePriority('low');
      if (task.priority === 'low') task.priority = 'high';
      else task.priority = 'low';
    } else if (action === 'completed' && task.id === taskId) {
      // task.isComplete();
      task.completed = !task.completed;
    } else if (action === 'delete' && task.id === taskId) {
      projects[project] = [...projects[project]].filter((task) => {
        return task.id !== taskId;
      });
      if (projects[project].length === 0) delete projects[project];
    }
  }
  localStorage.setItem('projects', JSON.stringify(projects));
};

export default updateAction;
