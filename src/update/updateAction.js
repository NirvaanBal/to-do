const updateAction = (element, projects, action) => {
  const project = element.parentElement.firstChild.textContent;
  const taskId = element.dataset.id;

  for (let task of projects[project]) {
    if (action === 'priority' && task.id === taskId) {
      if (task.priority === 'high') task.changePriority('low');
      else task.changePriority('high');
      return;
    } else if (action === 'completed' && task.id === taskId) {
      task.isComplete();
      return;
    }
  }
};

export default updateAction;