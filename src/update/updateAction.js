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
    } else if (action === 'delete' && task.id === taskId) {
      projects[project] = [...projects[project]].filter((task) => {
        return task.id !== taskId;
      });
      console.log(projects[project]);
      return;
    }
  }
};

export default updateAction;
