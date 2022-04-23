const header = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('header');

  const heading = document.createElement('h1');
  heading.textContent = 'To-Do on Steroids';
  rootDiv.appendChild(heading);

  const caption = document.createElement('p');
  caption.textContent =
    'An advanced version of staple front-end development project.';
  rootDiv.appendChild(caption);

  return rootDiv;
};

export default header;
