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

  return rootDiv;
};

export default intro;
