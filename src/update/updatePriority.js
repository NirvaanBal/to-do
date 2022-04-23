const updatePriority = (element, projects) => {
  const project = element.parentElement.firstChild.textContent;

  for (let task of projects[project]) {
    if (task.id === +element.dataset.id) {
      if (task.priority === 'high') task.priority = 'low';
      else task.priority = 'high';
      return;
    }
  }
};

export default updatePriority;
