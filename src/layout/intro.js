import './intro.scss';

const intro = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('intro');

  const heading = document.createElement('h1');
  heading.textContent = 'To-Do on Steroids';
  rootDiv.appendChild(heading);

  const caption = document.createElement('p');
  caption.textContent =
    'An advanced version of staple front-end development project.';
  rootDiv.appendChild(caption);

  [
    'Low priority (default)',
    'High priority',
    'Complete (ready to delete)',
  ].forEach((value, index) => {
    const holderDiv = document.createElement('div');
    holderDiv.classList.add('indicator');

    const colorIndicator = document.createElement('div');
    colorIndicator.classList.add('color');
    colorIndicator.setAttribute('id', `color-${index}`);
    holderDiv.appendChild(colorIndicator);

    const colorCaption = document.createElement('h3');
    colorCaption.textContent = value;
    holderDiv.appendChild(colorCaption);

    rootDiv.appendChild(holderDiv);
  });

  const actions = document.createElement('div');
  actions.setAttribute('class', 'actions');
  rootDiv.appendChild(actions);

  const priority = document.createElement('p');
  priority.textContent = 'P - Toggle priority from low to high or vice-versa.';
  actions.appendChild(priority);

  const status = document.createElement('p');
  status.textContent = 'C - Set status to complete or revert back to wokring.';
  actions.appendChild(status);

  const del = document.createElement('p');
  del.textContent = 'D - Delete a specific/completed task.';
  actions.appendChild(del);

  return rootDiv;
};

export default intro;
