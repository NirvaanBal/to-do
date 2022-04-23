import './index.scss';

import header from './layout/header';
import formContainer from './layout/form';

// app state
const todos = {};

const main = () => {
  const root = document.querySelector('#root');

  // header
  root.appendChild(header());

  const content = document.createElement('div');
  content.classList.add('main');
  root.appendChild(content);

  // form
  content.appendChild(formContainer);
};

main();
