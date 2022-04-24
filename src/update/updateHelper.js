import { todos } from '../index';
import updateAction from './updateAction';

const updateHelper = (el, action) => {
  updateAction(el, todos, action);

  if (action === 'priority') el.classList.toggle('high');
  else if (action === 'completed') el.classList.toggle('completed');
  else if (action === 'delete') {
    const project = el.parentElement;
    el.remove();
    if (action === 'delete' && !project.firstChild.nextElementSibling) {
      project.remove();
    }
  }
};

export default updateHelper;
